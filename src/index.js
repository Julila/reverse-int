module.exports = function reverse(n) {
  const str = Math.abs(n).toString();

  const reversed = [...str].reverse().join('');
  return Number(reversed);
};
