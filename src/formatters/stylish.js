import { isPlainObject } from 'lodash-es';

const spaceCount = 4;
const space = ' '.repeat(spaceCount);

const stringifyData = (data, depth = 0) => {
  if (!isPlainObject(data)) {
    return String(data);
  }
  const indent = space.repeat(depth + 1);
  const dataString = Object
    .entries(data)
    .map(([key, value]) => `${indent}${space}${key}: ${stringifyData(value, depth + 1)}`);
  return [
    '{',
    ...dataString,
    `${indent}}`,
  ].join('\n');
};

const getStylishOutput = (data, depth = 0) => {
  const indent = space.repeat(depth);
  const tree = data
    .flatMap((node) => {
      const {
        key, value, status, oldValue, newValue, children,
      } = node;
      switch (status) {
        case 'added':
          return `${indent}  + ${key}: ${stringifyData(value, depth)}`;
        case 'removed':
          return `${indent}  - ${key}: ${stringifyData(value, depth)}`;
        case 'replaced':
          return [
            `${indent}  - ${key}: ${stringifyData(oldValue, depth)}`,
            `${indent}  + ${key}: ${stringifyData(newValue, depth)}`,
          ];
        case 'nested':
          return `${indent}${space}${key}: ${getStylishOutput(children, depth + 1)}`;
        case 'unchanged':
          return `${indent}${space}${key}: ${stringifyData(value, depth)}`;
        default:
          throw new Error(`Unknown status ${status}`);
      }
    });
  return ['{', ...tree, `${indent}}`].join('\n');
};

export default getStylishOutput;
