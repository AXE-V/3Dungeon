import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs, { fstatSync } from 'fs';
import AdmZip from 'adm-zip';
import { __dname } from './global.js';

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

app.use(cors());

app.post('/upload', upload.single('archive'), async (req, res) => {
  try {
    if (req.file) {
      // Текущий путь архива
      const zipPath = req.file.path;
      const extractPath = path.resolve(__dname, '../..', 'public/models/uploads');
      const allowedExtensions = [
        '.jpeg',
        '.png',
        '.bin',
        '.gltf',
        '.glb',
        '.obj',
        '.fbx',
        '.3ds',
        '.ma',
        '.c4d',
        '.blend',
        '.stl',
      ];
      let scenePath = '';
      let sceneFormat = '';

      // Очищаем директорию перед разархивированием
      if (fs.existsSync(extractPath)) {
        fs.rmdirSync(extractPath, { recursive: true });
      }

      const zip = new AdmZip(zipPath);
      // Разархивируем архив
      zip.getEntries().forEach((zipEntry) => {
        // поиск сцены
        allowedExtensions.slice(2).forEach((ext) => {
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

      // Удаляем архив после разархивирования
      fs.unlinkSync(zipPath);

      res.json({
        success: true,
        message: 'файл загружен',
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
    console.log('ошибка разархивировации', error);
  }
});

app.get('/', (_, res) => res.send('server'));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
