function countBits(n) {
  let arr = [];
  let sum = 0;
  while (n > 0) {
    n % 2 === 0 ? arr.push(0) : arr.push(1);
    n = parseInt(n / 2);
  }
  arr.reverse().forEach((e) => {
    e === 1 ? sum++ : false;
  });
  return sum;
}
