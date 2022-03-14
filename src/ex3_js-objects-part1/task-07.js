function deepClone(obj) {
  if (typeof (obj) !== 'object') {
    return obj;
  }

  if (!obj) {
    return obj;
  }

  let clone;

  if (obj instanceof Array) {
    clone = [];
  } else {
    clone = {};
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

module.exports = deepClone;
