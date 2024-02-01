let userName = prompt("как вас зовут???");
let userAge = prompt("сколько вам лет??");

userName = userName.toLowerCase().trim();
userAge = Number(userAge.trim());

alert(`вас зовут ${userName} и вам ${userAge} лет`);
