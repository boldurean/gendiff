import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parse = (filepath, extension) => {
  if (!extension) {
    throw new Error('Unknown file type');
  }
  const parseData = parsers[extension];
  return parseData(filepath);
};

export default parse;
