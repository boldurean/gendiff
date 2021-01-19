import fs from 'fs';
import genDiff from '../src';

test('genDiff', async () => {
  const filepath1 = '__fixtures__/file1.json';
  const filepath2 = '__fixtures__/file2.json';
  const gendiff = await fs.readFileSync(`${process.cwd()}/__fixtures__/gendiff.txt`, 'utf-8');
  expect(console.log(genDiff(filepath1, filepath2))).toBe(console.log(gendiff));
});
