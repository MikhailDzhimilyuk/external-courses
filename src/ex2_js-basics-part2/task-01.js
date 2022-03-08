/* eslint linebreak-style: ["error", "windows"] */

function dataType(arg) {
  if (typeof arg === 'string') {
    return 'string';
  }
  if (!Number.isNaN(arg) && typeof arg === 'number') {
    return 'number';
  }
  return undefined;
}

module.exports = dataType;
