function getProtProperty(key, obj) {
  return obj.__proto__[key];
}

module.exports = getProtProperty;
