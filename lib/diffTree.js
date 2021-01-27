import {
  keys, sortBy, isPlainObject, has, union,
} from 'lodash-es';

const diffTree = (data1, data2) => {
  const keys1 = keys(data1);
  const keys2 = keys(data2);
  const unionKeys = sortBy(union(keys1, keys2));
  return unionKeys
    .map((key) => {
      if (!has(data2, key)) {
        return { key, value: data1[key], status: 'removed' };
      }
      if (!has(data1, key)) {
        return { key, value: data2[key], status: 'added' };
      }
      if (isPlainObject(data1[key]) && isPlainObject(data2[key])) {
        return { key, status: 'nested', children: diffTree(data1[key], data2[key]) };
      }
      if (data1[key] !== data2[key]) {
        return {
          key,
          oldValue: data1[key],
          newValue: data2[key],
          status: 'replaced',
        };
      }
      return { key, value: data1[key], status: 'unchanged' };
    });
};

export default diffTree;
