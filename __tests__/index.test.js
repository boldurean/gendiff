import { readFileSync } from 'fs';
import { join } from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => join(process.cwd(), '__tests__', '__fixtures__', filename);

const filePairs = [
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
  ['file1.json', 'file2.yml'],
];

describe.each(filePairs)('compare two files %s and %s', (a, b) => {
  const file1 = getFixturePath(a);
  const file2 = getFixturePath(b);
  const formats = ['json', 'stylish', 'plain'];
  test.each(formats)('testing with format %s', (format) => {
    const expected = readFileSync(getFixturePath(format), 'utf-8');
    expect(genDiff(file1, file2, format)).toEqual(expected);
  });
});
