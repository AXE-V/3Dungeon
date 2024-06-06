import express, { json } from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs, { fstatSync } from 'fs';
import AdmZip from 'adm-zip';
import { createClient } from '@supabase/supabase-js';
import config from '../../supabaseConfig.json' assert { type: 'json' };
import { __dname } from './global.js';
import { ChildProcess, spawn } from 'child_process';

const supabaseUrl = config.VITE_SUPABASE_URL;
const supabaseAnonKey = config.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
            scenePath = path.join('/models/uploads', zipEntry.entryName).replace(/\\/g, '/');
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
        message: 'файл загружен',
        zip_name: zipName,
        scene: {
          path: scenePath,
          format: sceneFormat,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'ошибка при загрузке файла',
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'ошибка разархивации',
    });
    console.error('ошибка разархивации', error);
  }
});

app.post('/zip', async (req, res) => {
  const zipPath = path.join(__dname, '../..', 'public/models/uploads/');
  const zip = new AdmZip();

  console.log('Чтение данных началось');
  fs.readdirSync(zipPath).forEach((file) => {
    const filePath = `${zipPath}${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      zip.addLocalFolder(filePath, file);
    } else {
      zip.addLocalFile(filePath, file);
    }
  });
  console.log('Чтение данных завершено');

  const zipBuffer = zip.toBuffer();

  try {
    const { zip_name, uid, postData, modelData } = req.body;

    const zip_nameDir = path.dirname(zip_name);
    const glb = new File([modelData.glb], 'scene-transformed.glb', { type: 'model/gltf-binary' });
    const tsx = new File([modelData.tsx], 'model.tsx', { type: 'application/typescript' });

    console.log('сохранение данных');
    supabase.storage
      .from('models')
      .upload(`${uid}/${zip_nameDir}/${glb.name}`, glb, { contentType: glb.type });
    supabase.storage
      .from('models')
      .upload(`${uid}/${zip_nameDir}/${tsx.name}`, tsx, { contentType: tsx.type });
    const { error } = await supabase.storage
      .from('models')
      .upload(`${uid}/${zip_nameDir}/${zip_name}`, zipBuffer, { contentType: 'application/zip' });
    const { count } = await supabase.from('models').upsert(postData);

    if (error) {
      console.error('ошибка загрузки данных в хранилище');
      console.error(error);
      res.status(502).json({ success: false, message: `${error}` });
    } else {
      console.error('данные соханены в хранилище');
      res.status(200).json({
        success: true,
        message: 'Archive uploaded successfully to Supabase storage',
        count,
      });
    }
  } catch (error) {
    console.error('ошибка загрузки данных в хранилище (catch)');
    console.log(error);
    res.status(500).json({ success: false, message: 'Error uploading to Supabase storage' });
  }
});

// app.post('/zip', async (req, res) => {
//   const zipPath = path.join('/public/models/uploads');
//   const zip = new AdmZip();

//   console.log('Чтение данных началось');
//   fs.readdirSync(zipPath).forEach((file) => {
//     const filePath = `${zipPath}/${file}`;
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
//     const { zip_name, uid, postData: bodyData, zipData } = req.body;

//     console.log('Начало запросов');
//     const { error } = await supabase.storage
//       .from('models')
//       .upload(`${uid}/${zip_name}`, zipBuffer, { contentType: 'application/zip' });
//     const { count } = await supabase.from('models').upsert(bodyData);
//     console.log('Конец запросов');

//     if (error) {
//       console.error('ошибка загрузки zip файла в хранишище');
//       console.error(error);
//       res
//         .status(502)
//         .json({ success: false, message: 'Error uploading archive to Supabase storage' });
//     } else {
//       console.error('архив загружен в хранишище');
//       res.status(200).json({
//         success: true,
//         message: 'Archive uploaded successfully to Supabase storage',
//         count,
//       });
//     }
//   } catch (error) {
//     console.error('ошибка загрузки zip файла в хранишище (catch)');
//     console.log(error);
//     res.status(500).json({ success: false, message: 'Error uploading to Supabase storage' });
//   }
// });

app.post('/generate-gltf-jsx', async (req, res) => {
  try {
    const { scene, outputBasename } = req.body;
    const sceneDir = './public/models/uploads/';
    // удаление содержимого перед генерацией файлов
    fs.readdirSync('./').forEach((file) => {
      if (file === `${path.parse(scene).name}-transformed.glb`) {
        fs.unlinkSync(file);
        console.log(`удален ${file}`);
      }
      if (file === outputBasename) {
        fs.unlinkSync(file);
        console.log(`удален ${file}`);
      }
    });

    // генерация файлов
    const gltfjsxProcess = spawn(
      'npx',
      ['gltfjsx', `${sceneDir}${scene}`, '-T', '-t', '-o', `${outputBasename}`],
      { shell: true },
    );

    gltfjsxProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    gltfjsxProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    await new Promise((resolve) => gltfjsxProcess.on('close', resolve));

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

app.get('/', (_, res) => res.send('server'));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
