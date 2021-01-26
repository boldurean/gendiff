import { join } from 'path';
import genDiff from '../src';
import parse from '../lib/parser.js';

const getFixturePath = (filename) => join(process.cwd(), '__fixtures__', filename);

const expectedOutput = parse(getFixturePath('expected.txt'));

describe.each([
  ['file1.json', 'file2.json', expectedOutput],
  ['file1.yml', 'file2.yml', expectedOutput],
  ['file1.json', 'file2.yml', expectedOutput],
  ['file1.yml', 'file2.json', expectedOutput],
])('gendiff %s %s', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    const firstFile = getFixturePath(a);
    const secondFile = getFixturePath(b);
    expect(genDiff(firstFile, secondFile)).toBe(expected);
  });
});
