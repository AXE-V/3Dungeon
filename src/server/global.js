// Переопределить __filename и __dirname для всех модулей
import { fileURLToPath } from 'url';
export const __fname = fileURLToPath(import.meta.url);
export const __dname = fileURLToPath(new URL('.', import.meta.url));
