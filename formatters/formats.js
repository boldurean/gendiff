import getStylishOutput from './stylish.js';

export default (data, type) => {
  switch (type) {
    case 'stylish':
      return getStylishOutput(data);
    default:
      throw new Error(`Unknown format ${type}`);
  }
};
