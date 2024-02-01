let userString = prompt("введите строку которую нужно обрезать");
let startSliceIndex = prompt(
  "введите индекс, с которого нужно начать обрезка строки"
);
let endSliceIndex = prompt(
  "введите индекс, с которым нужно  закончить обрезку строки"
);

userString = userString.trim();
startSliceIndex = Number(startSliceIndex.trim());
endSliceIndex = Number(endSliceIndex.trim());

string = userString.slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${string}`);
