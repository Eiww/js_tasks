let numbers = [10, 4, 100, -5, 54, 2];
let num = 0;
for (i = 0; i < numbers.length; i++) {
  num += numbers[i] ** 3;
}

console.log(num);

let num2 = 0;

for (i of numbers) {
  num2 += i ** 3;
}
console.log(num2);

let num3 = 0;

numbers.forEach((i) => {
  num3 += i ** 3;
});

console.log(num3);

const num4 = numbers.reduce(function (currentSum, currentNum) {
  return currentSum + currentNum ** 3;
}, 0);
console.log(num4);
