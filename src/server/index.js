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
import os from 'os';

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

app.post('/generate-gltf-jsx', async (req, res) => {
  try {
    const { scene, zip_name, uid } = req.body;

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

app.post('/check-path-generated', async (req, res) => {
  const { post } = req.body;
  const loadPath = `./public/models/data/${post.user_id}/${path.parse(post.zip_name).name}`;
  if (fs.existsSync(loadPath)) {
    res.status(500).json({
      success: false,
      message: 'path exists',
    });
  } else {
    res.status(200).json({
      success: true,
      message: 'path loaded',
    });
  }
});

const uploadMS = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const { user_id, zip_name } = req.body;
      const loadPath = `./public/models/data/${user_id}/${path.parse(zip_name).name}`;

      if (!fs.existsSync(loadPath)) {
        fs.mkdirSync(loadPath, { recursive: true });
      }
      cb(null, loadPath);
      console.log('files loaded');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

app.post('/load-gltf-jsx', uploadMS.array('file'));

app.post('/download-zip', async (req, res) => {
  try {
    const { post } = req.body;
    const { data: blob } = await supabase.storage
      .from('models')
      .download(`${post.user_id}/${path.parse(post.zip_name).name}/${post.zip_name}`);

    const buf = Buffer.from(await blob.arrayBuffer());
    fs.writeFile(path.join(os.homedir(), 'Downloads', post.zip_name), buf, (err) => {
      if (err) throw err;
      console.log('файл загружен');
    });
    res.status(200).json({
      success: true,
      message: 'file downloaded',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'error when file downloads',
    });
    console.log(error);
  }
});

app.get('/', (_, res) => res.send('server'));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
