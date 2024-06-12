import express, { json } from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import AdmZip from 'adm-zip';
import { createClient } from '@supabase/supabase-js';
import { __dname } from './global.js';
import { spawn } from 'child_process';
import { randomUUID } from 'crypto';
// import { importFile } from './importFile.js';
import { supabase } from './supabase.js';
import { uploadFile } from './utils/uploadFile.js';

const app = express();
const port = 4200;
// Настройка multer для обработки загруженных файлов
const storage = multer.diskStorage({
  destination: './public/models/tmp',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(json());
app.use(cors());

app.post('/unzip', upload.single('zip'), async (req, res) => {
  try {
    if (req.file) {
      // Текущий путь архива
      const zipPath = req.file.path;
      const zipName = req.file.filename;
      const extractPath = path.resolve(__dname, '../..', 'public/models/uploads');
      const allowedExtensions = ['.jpeg', '.png', '.bin', '.gltf', '.glb'];
      let scenePath = '';
      let sceneFormat = '';

      // Удаление директории перед разархивированием
      if (fs.existsSync(extractPath)) {
        fs.rmSync(extractPath, { recursive: true, force: true });
        console.log(`удалена директория ${extractPath}`);
      }

      const zip = new AdmZip(zipPath);

      // Разархивация архива
      zip.getEntries().forEach((zipEntry) => {
        // поиск сцены
        allowedExtensions.slice(3).forEach((ext) => {
          if (ext === path.extname(zipEntry.name)) {
            scenePath = zipEntry.entryName;
            sceneFormat = path.extname(zipEntry.name);
          }
        });

        // извлечение разрешенных файлов
        allowedExtensions.forEach((ext) => {
          if (ext === path.extname(zipEntry.name)) {
            zip.extractEntryTo(zipEntry, extractPath, true);
          }
        });
      });
      console.log(`aрхив разархивирован ${zipPath}`);

      // Удаление архива после разархивирования
      fs.unlinkSync(zipPath);
      console.log(`aрхив удален ${zipPath}`);

      res.status(200).json({
        success: true,
        message: 'file loaded',
        zip_name: zipName,
        scene: {
          path: scenePath,
          format: sceneFormat,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'error loading file',
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'unzip error',
    });
    console.error('unzip error', error);
  }
});

// app.post('/unzip', upload.single('zip'), async (req, res) => {
//   try {
//     if (req.file) {
//       // Текущий путь архива
//       const zipPath = req.file.path;
//       const zipName = req.file.filename;
//       const extractPath = path.resolve(__dname, '../..', 'public/models/uploads');
//       const allowedExtensions = ['.jpeg', '.png', '.bin', '.gltf', '.glb'];
//       let scenePath = '';
//       let sceneFormat = '';

//       // Удаление директории перед разархивированием
//       if (fs.existsSync(extractPath)) {
//         fs.rmSync(extractPath, { recursive: true, force: true });
//         console.log(`удалена директория ${extractPath}`);
//       }

//       const zip = new AdmZip(zipPath);

//       // Разархивация архива
//       zip.getEntries().forEach((zipEntry) => {
//         // поиск сцены
//         allowedExtensions.slice(3).forEach((ext) => {
//           if (ext === path.extname(zipEntry.name)) {
//             scenePath = path.join('/models/uploads', zipEntry.entryName).replace(/\\/g, '/');
//             sceneFormat = path.extname(zipEntry.name);
//           }
//         });

//         // извлечение разрешенных файлов
//         allowedExtensions.forEach((ext) => {
//           if (ext === path.extname(zipEntry.name)) {
//             zip.extractEntryTo(zipEntry, extractPath, true);
//           }
//         });
//       });
//       console.log(`aрхив разархивирован ${zipPath}`);

//       // Удаление архива после разархивирования
//       fs.unlinkSync(zipPath);
//       console.log(`aрхив удален ${zipPath}`);

//       res.status(200).json({
//         success: true,
//         message: 'file loaded',
//         zip_name: zipName,
//         scene: {
//           path: scenePath,
//           format: sceneFormat,
//         },
//       });
//     } else {
//       res.status(400).json({
//         success: false,
//         message: 'error loading file',
//       });
//     }
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: 'unzip error',
//     });
//     console.error('unzip error', error);
//   }
// });

app.post('/zip', async (req, res) => {
  const zipPath = path.join(__dname, '../..', 'public/models/uploads/');
  const zip = new AdmZip();

  console.log('Чтение данных началось');
  fs.readdirSync(zipPath).forEach((file) => {
    const filePath = `${zipPath}${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      zip.addLocalFolder(filePath, file);
    } else if (stats.isFile()) {
      zip.addLocalFile(filePath, file);
    }
  });
  console.log('Чтение данных завершено');

  const zipBuffer = zip.toBuffer();

  try {
    const { zip_name, uid } = req.body;
    const zipFolder = path.parse(zip_name).name;
    const rootStoragePath = `${uid}/${zipFolder}`;
    const baseNameFiles = [
      { name: 'scene-transformed.glb', type: 'model/gltf-binary' },
      { name: 'scene.tsx', type: 'application/typescript' },
    ];

    console.log('сохранение данных');
    uploadFile('models', `${rootStoragePath}/${zip_name}`, zipBuffer, {
      contentType: 'application/zip',
      upsert: false,
    });

    const upload = () => {
      baseNameFiles.forEach((obj) => {
        const localPath = path.join(
          __dname,
          '../..',
          `public/models/data/${uid}/${zipFolder}/${obj.name}`,
        );
        const buf = fs.readFileSync(localPath);
        const storagePath = `${rootStoragePath}/${obj.name}`;
        uploadFile('models', `${storagePath}`, buf, { contentType: obj.type, upsert: false });
      });
    };
    upload();
    console.log('данные сохранены');

    res.status(200).json({
      success: true,
      message: 'files uploaded successfully to Supabase storage',
    });
  } catch (error) {
    console.error('error loading data into storage');
    console.log(error);
    res.status(500).json({ success: false, message: 'error loading data into storage' });
  }
});

// app.post('/zip', async (req, res) => {
//   req.socket.setTimeout;
//   const zipPath = path.join(__dname, '../..', 'public/models/uploads/');
//   const zip = new AdmZip();

//   console.log('Чтение данных началось');
//   fs.readdirSync(zipPath).forEach((file) => {
//     const filePath = `${zipPath}${file}`;
//     const stats = fs.statSync(filePath);
//     if (stats.isDirectory()) {
//       zip.addLocalFolder(filePath, file);
//     } else {
//       zip.addLocalFile(filePath, file);
//     }
//   });
//   console.log('Чтение данных завершено');

//   const zipBuffer = zip.toBuffer();

//   try {
//     const { zip_name, uid, postData, modelData } = req.body;

//     const zipFolderName = path.parse(zip_name).name;

//     const glb = new File([modelData.glb], 'scene-transformed.glb', { type: 'model/gltf-binary' });
//     const tsx = new File([modelData.tsx], 'scene.tsx', { type: 'application/typescript' });

//     console.log('сохранение данных');

//     const res1 = await supabase.from('models').insert(postData);
//     if (res1.error) {
//       console.log(res1.error);
//     }
//     console.log(res1.data);

//     const res2 = await supabase.storage
//       .from('models')
//       .upload(`${uid}/${zipFolderName}/${glb.name}`, glb, { contentType: glb.type });
//     if (res2.error) {
//       console.log(res2.error);
//     }
//     console.log(res2.data);

//     const res3 = await supabase.storage
//       .from('models')
//       .upload(`${uid}/${zipFolderName}/${tsx.name}`, tsx, { contentType: tsx.type });
//     if (res3.error) {
//       console.log(res3.error);
//     }
//     console.log(res3.data);

//     const res4 = await supabase.storage
//       .from('models')
//       .upload(`${uid}/${zipFolderName}/${zip_name}`, zipBuffer, {
//         contentType: 'application/zip',
//       });
//     if (res4.error) {
//       console.log(res4.error);
//     }
//     console.log(res4.data);

//     res.status(200).json({
//       success: true,
//       message: 'files uploaded successfully to Supabase storage',
//     });
//   } catch (error) {
//     console.error('ошибка загрузки данных в хранилище (catch)');
//     console.log(error);
//     res.status(500).json({ success: false, message: 'Error uploading to Supabase storage' });
//   }
// });

app.post('/generate-gltf-jsx', async (req, res) => {
  try {
    const { scene, zip_name, uid } = req.body;
    // удаление содержимого перед генерацией файлов
    // fs.readdirSync('./').forEach((file) => {
    //   if (file === `${path.parse(scene).name}-transformed.glb`) {
    //     fs.unlinkSync(file);
    //     console.log(`удален ${file}`);
    //   }
    //   if (file === 'scene.tsx') {
    //     fs.unlinkSync(file);
    //     console.log(`удален ${file}`);
    //   }
    // });

    const generationPath = `./public/models/data/${uid}/${path.parse(zip_name).name}/`;

    if (!fs.existsSync(generationPath)) {
      fs.mkdirSync(generationPath, { recursive: true });
    }

    console.log('генерация файлов началась');
    // генерация файлов
    const gltfjsxProcess = spawn(
      'npx',
      [
        'gltfjsx',
        `./public/models/uploads/${scene}`,
        '-T',
        '-t',
        '-o',
        `${generationPath}scene.tsx`,
        '-r',
        './public',
      ],
      { shell: true },
    );

    gltfjsxProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    gltfjsxProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    await new Promise((resolve) => gltfjsxProcess.on('close', resolve));
    console.log('генерация файлов закончилась');

    res.status(200).json({
      success: true,
      message: 'files successfully were generated',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'failed to generate files',
    });
  }
});

app.post('/load-gltf-jsx', upload.array('file'), async (req, res) => {
  try {
    const zip_name = req.body.zip_name;
    const uid = req.body.user_id;
    const generationPath = `./public/models/data/${uid}/${path.parse(zip_name).name}`;

    console.log('начало создания файлов');
    console.log(req.files);
    req.files.forEach((f) => {
      // console.log(f.buffer);
      if (f.mimetype !== 'application/zip') {
        if (!fs.existsSync(generationPath)) {
          fs.mkdirSync(generationPath);
        }

        fs.copyFile(
          `./public/models/tmp/${f.originalname}`,
          `${generationPath}/${f.originalname}`,
          (err) => (err ? console.log(err) : void 0),
        );

        fs.unlink(`./public/models/tmp/${f.originalname}`, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(`file ${f.originalname} was deleted`);
        });
      }
    });
    console.log('файлы созданы');

    res.status(200).json({
      success: true,
      message: 'files created',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'error when creating files',
    });
  }
});

// // тестовые точки
// app.post('/upload-model', (req, res) => {
//   const fileId = randomUUID(); // генерируем уникальный идентификатор загрузки

//   const filePath = `/uploads/${fileId}.stl`; // путь к файлу модели

//   // сохраняем файл модели на сервере
//   req.pipe(fs.createWriteStream(filePath));

//   // запускаем child_process для генерации файлов модели
//   const childProcess = spawn('generate-model-files', [filePath]);

//   // возвращаем идентификатор загрузки
//   res.json({ fileId });
// });

// app.get('/check-upload-status/:fileId', (req, res) => {
//   const fileId = req.params.fileId;
//   const filePath = `/uploads/${fileId}.stl`;

//   // проверяем статус загрузки
//   if (childProcess.stdout) {
//     res.json({ status: 'loading' });
//   } else if (fs.existsSync(filePath)) {
//     res.json({ status: 'uccess' });
//   } else {
//     res.json({ status: 'error' });
//   }
// });

app.get('/', (_, res) => res.send('server'));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
