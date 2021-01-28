import { readFileSync } from 'fs';
import { join } from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => join(process.cwd(), '__tests__', '__fixtures__', filename);

describe.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yaml'],
  ['file1.json', 'file2.yaml'],
])('compare two files %s and %s', (a, b) => {
  const file1 = getFixturePath(a);
  const file2 = getFixturePath(b);
  const formats = ['json', 'stylish', 'plain'];
  test.each(formats)('testing with format %s', (format) => {
    const expected = readFileSync(getFixturePath(format), 'utf-8');
    expect(genDiff(file1, file2, format)).toEqual(expected);
  });
  test('default formatter', () => {
    const expectedDefault = readFileSync(getFixturePath('stylish'), 'utf-8');
    expect(genDiff(file1, file2)).toEqual(expectedDefault);
  });
});
