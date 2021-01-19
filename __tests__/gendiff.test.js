import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff', async () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const gendiffPath = getFixturePath('gendiff.txt');
  const gendiff = await fs.readFileSync(gendiffPath, 'utf-8');
  expect(console.log(genDiff(filepath1, filepath2))).toBe(console.log(gendiff));
});
