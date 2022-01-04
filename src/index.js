module.exports = function reverse (n) {
  let result = '';
  n < 0 ? (n = n * -1) : n;
  n = n + '';

  for (let i = n.length - 1; i >= 0; i--) {
    result += n[i];
  }
  return result;
};
