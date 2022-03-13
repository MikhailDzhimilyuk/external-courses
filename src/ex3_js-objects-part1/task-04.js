function createNewProperty(key, obj) {
  const newObj = JSON.parse(JSON.stringify(obj));

  if (!(newObj.hasOwnProperty(key))) {
    newObj[key] = 'new';
  }

  return newObj;
}

module.exports = createNewProperty;
