console.log(+console.log, typeof +console.log);
console.log(String({ name: "Maxim" }), typeof String({ name: "Maxim" }));
console.log(String(Number), typeof String(Number));
console.log(+"", typeof +"");
console.log(String(0), typeof String(0));
console.log(Boolean(-10), typeof Boolean(-10));
console.log(Number("-105"), typeof Number("-105"));
console.log(+Symbol("key"), typeof +Symbol("key")); //символ не преобразуется
