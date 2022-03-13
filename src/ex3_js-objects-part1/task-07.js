function deepClone(obj) {
  if (typeof (obj) !== 'object') {
    return obj;
  }

  if (!obj) {
    return obj;
  }

  let Clone;

  if (obj instanceof Array) {
    Clone = [];
  } else {
    Clone = {};
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      Clone[key] = deepClone(obj[key]);
    }
  }

  return Clone;
}

module.exports = deepClone;
