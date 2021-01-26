import parse from '../lib/parser.js';
import diffTree from '../lib/diffTree.js';
import format from '../formatters/index.js';

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const parsed1 = parse(filepath1);
  const parsed2 = parse(filepath2);
  const tree = diffTree(parsed1, parsed2);
  return format(tree, formatType);
};
export default genDiff;
