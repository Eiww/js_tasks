let existedUserLogin = "the_best_user";
let existedUserPassword = "12345678";

let userLogin = prompt("Введите логин").trim();
let userPassword = prompt("Введите пароль").trim();

console.log(userLogin);
console.log(userPassword);

if ((existedUserLogin === userLogin, existedUserPassword === userPassword)) {
  alert(`добро пожаловать, ${userLogin}`);
} else {
  alert("Неверный пароль");
}
