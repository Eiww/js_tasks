function getDivisorsCount(number = 1) {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля!!");
  }
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      sum++;
    }
  }
  return sum;
}

console.log(getDivisorsCount(5));
