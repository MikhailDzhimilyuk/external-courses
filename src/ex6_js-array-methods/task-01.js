function slice(arr, begin = 0, end = arr.length) {
  const sliceArr = [];
  let locBegin = begin;
  let locEnd = end;

  if (begin < 0 && begin > -arr.length) { locBegin += arr.length; }

  if (end < 0 && end > -arr.length) { locEnd += arr.length; }

  for (let i = locBegin; i < locEnd; i += 1) {
    if (arr[i]) {
      sliceArr.push(arr[i]);
    }
  }

  return sliceArr;
}

module.exports = slice;
