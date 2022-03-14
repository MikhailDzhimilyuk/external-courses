function createNewProperty(key, obj) {
  const newObj = { ...obj };

  if (!(newObj.hasOwnProperty(key))) {
    newObj[key] = 'new';
  }

  return newObj;
}

module.exports = createNewProperty;
