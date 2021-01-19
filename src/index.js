import fs from 'fs';
import path from 'path';
import {
  keys, has, sortBy, union,
} from 'lodash-es';

const absolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filename) => {
  const fileURL = absolutePath(filename);
  const data = fs.readFileSync(fileURL);
  return JSON.parse(data);
};

const comparator = (data1, data2) => {
  const keys1 = keys(data1);
  const keys2 = keys(data2);
  const merged = { ...data1, ...data2 };
  const tab = ' ';
  const dataKeys = sortBy(union(keys1, keys2));
  const result = dataKeys.map((key) => {
    if (!has(data1, key)) {
      return `${tab}+${key}: ${merged[key]}`;
    }
    if (!has(data2, key)) {
      return `${tab}-${key}: ${merged[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `${tab}-${key}: ${data1[key]}\n${tab}+${key}: ${data2[key]}`;
    }
    return `${tab} ${key}: ${data1[key]}`;
  });
  return [
    '{',
    ...result,
    '}',
  ].join('\n');
};

const genDiff = (filepath1, filepath2) => {
  const firstFile = getData(filepath1);
  const secondFile = getData(filepath2);
  return comparator(firstFile, secondFile);
};
export default genDiff;
