export function divideArrayWithMaxSize(arr, maxSize) {
  const result = [];
  let i = 0;

  while (i < arr.length) {
    const e = arr.slice(i, i + maxSize);
    result.push(e);
    i += maxSize;
  }

  return result;
}
