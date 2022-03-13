/* eslint-disable no-eval */
function getProperty(obj, propertyPath) {
  const arr = propertyPath.split('.');
  let str = 'obj';

  if (arr.length === 1) { return obj[arr[0]]; }

  for (let i = 0; i < arr.length; i += 1) {
    str = `${str}[arr[${i}]]`; // 'obj[arr[0]]', 'obj[arr[0]][arr[1]]'...

    if (i === arr.length - 1) {
      return eval(str);
    }

    if (eval(str) === null || eval(str) === undefined) {
      return undefined;
    }
  }

  return undefined;
}
module.exports = getProperty;
