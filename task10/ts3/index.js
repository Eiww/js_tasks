const footballer = {
  fullName: "Cristiano Ronaldo",
  attack: function () {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal: function (sound) {
    console.log(`${this.fullName} забил гол!`);
    this.celebrate(sound);
  },
  celebrate: function (sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(`${this.fullName} уходит на замену.`);
    console.log(`${this.fullName} поле выходит ${newPlayer}`);
  },
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack();
score.call(footballer, "Сиииии");
substitute.apply(footballer, ["Paulo Dibala"]);
