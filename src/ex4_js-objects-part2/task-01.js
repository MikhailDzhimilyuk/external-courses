function getProtProperty(key, obj) {
  return Object.getPrototypeOf(obj)[key];
}

module.exports = getProtProperty;
