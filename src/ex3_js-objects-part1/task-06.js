/* eslint-disable no-eval */
function getProperty(obj, propertyPath) {
  const arr = propertyPath.split('.');
  let str = 'obj';

  for (let i = 0; i < arr.length; i += 1) {
    str += `[arr[${i}]]`;

    if (eval(str) === null || eval(str) === undefined) {
      return undefined;
    }
  }

  return eval(str);
}

module.exports = getProperty;
