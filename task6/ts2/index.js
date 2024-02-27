function getSumOfNumbers(number, type) {
  let sum = 0;
  for (i = 0; i <= number; i++) {
    if (type === "odd" && i % 2 !== 0) {
      sum += i;
    } else if (type === "even" && i % 2 === 0) {
      sum += i;
    } else if (type === "") {
      sum += i;
    }
  }
  return sum;
}

console.log(getSumOfNumbers(10, "odd"));
