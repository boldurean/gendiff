import fs from 'fs';
import { resolve, extname } from 'path';

const getPath = (filepath) => resolve(process.cwd(), filepath);
const getExtension = (filepath) => extname(getPath(filepath));
const readFile = (filepath) => fs.readFileSync(getPath(filepath), 'utf-8');

export {
  getPath,
  getExtension,
  readFile,
};
