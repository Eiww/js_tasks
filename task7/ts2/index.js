function getSumOfSequence(number) {
  let arr = new Array(number);
  for (let i = 0; i <= number; i++) {
    arr[i] = i;
  }
  let sum = arr[0] + arr[number];
  return sum;
}

console.log(getSumOfSequence(5));
