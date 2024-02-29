const clientsEstimations = [];

function askclientsEstimations() {
  mark = +prompt("Как вы оцениваете нашу кофейню?");
  if (mark > 0 && mark <= 10) {
    clientsEstimations.push(mark);
  } else {
    alert("От 1 до 10");
  }
}

for (i = 0; i < 5; i++) {
  askclientsEstimations();
}

console.log(clientsEstimations);

const goodEstimations = clientsEstimations.filter(function (mark) {
  return mark > 5;
});

const notGoodEstimations = clientsEstimations.filter(function (mark) {
  return mark <= 5;
});

console.log(goodEstimations);
console.log(notGoodEstimations);

alert(
  `Всего положительных оценок: ${goodEstimations.length}, всего отрицательных оценок: ${notGoodEstimations.length}`
);
