import fs from 'fs';
import { extname, resolve } from 'path';
import parse from './parser.js';
import diffTree from './diffTree.js';
import format from './formatters/index.js';

const getPath = (filepath) => resolve(process.cwd(), filepath);
const getExtension = (filepath) => extname(getPath(filepath)).slice(1);
const readFile = (filepath) => fs.readFileSync(getPath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const file1 = parse(readFile(filepath1), getExtension(filepath1));
  const file2 = parse(readFile(filepath2), getExtension(filepath2));
  return format(diffTree(file1, file2), formatType);
};
export default genDiff;
