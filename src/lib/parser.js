import yaml from 'js-yaml';
import { getExtension, readFile } from './utils.js';

const parse = (filepath) => {
  const extension = getExtension(filepath);
  switch (extension) {
    case '.json':
      return JSON.parse(readFile(filepath));
    case '.yml' || '.yaml':
      return yaml.load(readFile(filepath));
    default:
      return readFile(filepath);
  }
};

export default parse;
