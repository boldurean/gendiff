import { isObject } from 'lodash-es';

const stringifyData = (data) => {
  if (isObject(data)) {
    return '[complex value]';
  }
  if (data === null) {
    return 'null';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const getPlainOutput = (data, path = '') => data
  .flatMap((node) => {
    const {
      key, value, oldValue, newValue, status, children,
    } = node;
    switch (status) {
      case 'added':
        return `Property '${path}${key}' was added with value: ${stringifyData(value)}`;
      case 'removed':
        return `Property '${path}${key}' was removed`;
      case 'replaced':
        return `Property '${path}${key}' was updated. From ${stringifyData(oldValue)} to ${stringifyData(newValue)}`;
      case 'nested':
        return getPlainOutput(children, `${path}${key}.`);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown status type ${status}`);
    }
  })
  .join('\n');

export default getPlainOutput;
