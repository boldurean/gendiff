import fs from 'fs';
import { extname, resolve } from 'path';
import parse from './parsers.js';
import diffTree from './diffTree.js';
import format from './formatters/index.js';

const getExtension = (filepath) => extname(filepath).slice(1);
const readFile = (filepath) => fs.readFileSync(resolve(process.cwd(), filepath), 'utf-8');

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const fileData1 = parse(readFile(filepath1), getExtension(filepath1));
  const fileData2 = parse(readFile(filepath2), getExtension(filepath2));
  return format(diffTree(fileData1, fileData2), formatType);
};
export default genDiff;
