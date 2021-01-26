import { join } from 'path';
import genDiff from '../src';
import parse from '../lib/parser.js';

const getFixturePath = (filename) => join(process.cwd(), '__fixtures__', filename);

const expectedStylish = parse(getFixturePath('expectedStylish.txt'));
const expectedPlain = parse(getFixturePath('expectedPlain.txt'));

const filePairs = [
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.json'],
  ['file1.json', 'file2.yml'],
  ['file1.yml', 'file2.yml'],
];

describe.each(filePairs)('compairs two files %s and %s', (a, b) => {
  test('Styilish', () => {
    expect(genDiff(getFixturePath(a), getFixturePath(b), 'stylish')).toEqual(expectedStylish);
  });
  test('Plain', () => {
    expect(genDiff(getFixturePath(a), getFixturePath(b), 'plain')).toEqual(expectedPlain);
  });
});
