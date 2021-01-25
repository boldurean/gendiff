import _ from 'lodash-es';

const diffTree = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const union = _.sortBy(_.union(keys1, keys2));
  return union
    .map((key) => {
      if (!_.has(data2, key)) {
        return { key, value: data1[key], status: 'removed' };
      }
      if (!_.has(data1, key)) {
        return { key, value: data2[key], status: 'added' };
      }
      if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
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
