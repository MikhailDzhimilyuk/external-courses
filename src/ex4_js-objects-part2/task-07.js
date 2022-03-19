function getShortenedString(str, num) {
  if (str.length > num) {
    return `${str.substring(0, num - 1)}…`;
  }

  return str;
}

module.exports = getShortenedString;
