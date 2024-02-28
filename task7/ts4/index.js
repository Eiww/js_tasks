const coffees = ["latte", "cappucino", "americano"];
const prices = [1.5, 1, 2];

const updatePrices = prices.map(function (price) {
  return price + 0.5;
});

coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatePrices[index]} евро`);
});
