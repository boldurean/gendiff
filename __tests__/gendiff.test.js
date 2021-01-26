import { join } from 'path';
import genDiff from '../src';
import parse from '../lib/parser.js';

const getFixturePath = (filename) => join(process.cwd(), '__fixtures__', filename);

const expectedStylish = parse(getFixturePath('expectedStylish.txt'));
const expectedPlain = parse(getFixturePath('expectedPlain.txt'));

test.each([
  ['file1.json', 'file2.json', expectedStylish],
  ['file1.yml', 'file2.json', expectedStylish],
  ['file1.json', 'file2.yml', expectedStylish],
  ['file1.yml', 'file2.yml', expectedStylish],
])('checks stylish output %s %s', (a, b, expected) => {
  expect(genDiff(getFixturePath(a), getFixturePath(b), 'stylish')).toEqual(expected);
});
test.each([
  ['file1.json', 'file2.json', expectedPlain],
  ['file1.yml', 'file2.yml', expectedPlain],
  ['file1.yml', 'file2.json', expectedPlain],
  ['file1.json', 'file2.yml', expectedPlain],
])('checks plain output %s %s', (a, b, expected) => {
  expect(genDiff(getFixturePath(a), getFixturePath(b), 'plain')).toEqual(expected);
});
