const getName1 = (name) => {
  alert(`имя пользователя: ${name}`);
};

console.log(getName1("vlad"));

const getName2 = function (name) {
  alert(`имя пользователя: ${name}`);
};
console.log(getName2("dima"));

function getName3(name) {
  alert(`имя пользователя: ${name}`);
}
console.log(getName3("andrei"));
