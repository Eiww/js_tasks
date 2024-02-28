const coffees = ["latte", "cappucino", "americano"];

let coffeeName = prompt("Поиск кофе по названию");

function coffeeIndex(element, index, array) {
  return element === coffeeName;
}

function coffeeSearch(coffeeName) {
  if (coffees.includes(coffeeName) === true) {
    alert(
      `Ваш любимый ${coffeeName}. Он ${
        coffees.findIndex(coffeeIndex) + 1
      }-ый по популярности в нашей кофейне`
    );
  } else {
    alert("Такого вида кофе нет...");
  }
}

coffeeSearch(coffeeName);
