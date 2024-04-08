const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "ГАВ";
  },
};
const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "чик-чирик";
  },
};

//bind

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic,
//   };
// }

// const boundMakeDomestic = makeDomestic.bind(dog);
// const domesticDog = boundMakeDomestic(true);
// console.log(domesticDog);

//call

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic,
//   };
// }

// const domesticBird = makeDomestic.call(bird, false);
// console.log(domesticBird);

//apply

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return {
    ...this,
    isDomestic,
  };
}

const domesticBird = makeDomestic.apply(bird, [false]);
console.log(domesticBird);
