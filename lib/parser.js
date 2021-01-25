import yaml from 'js-yaml';
import { getExtension, readFile } from './utils.js';

const parse = (filepath) => {
  const extension = getExtension(filepath);
  switch (extension) {
    case '.json':
      return JSON.parse(readFile(filepath));
    case '.yml' || '.yaml':
      return yaml.load(readFile(filepath));
    case '.txt':
      return readFile(filepath);
    default:
      throw new Error(`Current extension ${extension} cannot be read, please use files '.json, .yaml, .txt'`);
  }
};

export default parse;
