import { join } from 'path';
import genDiff from '../src';
import parse from '../lib/parser.js';

const getFixturePath = (filename) => join(process.cwd(), '__fixtures__', filename);

test('genDiff json', async () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expectedPath = getFixturePath('expected.txt');
  const expected = parse(expectedPath);
  expect(console.log(genDiff(path1, path2))).toBe(console.log(expected));
});

test('genDiff yml', async () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const expectedPath = getFixturePath('expected.txt');
  const expected = parse(expectedPath);
  expect(console.log(genDiff(path1, path2))).toBe(console.log(expected));
});

test('nested json', async () => {
  const path1 = getFixturePath('nested1.json');
  const path2 = getFixturePath('nested2.json');
  const expectedPath = getFixturePath('expected_nested.txt');
  const expected = parse(expectedPath);
  expect(console.log(genDiff(path1, path2))).toBe(console.log(expected));
});
