const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 3;
const correctAnswer4 = 12;
const correctAnswer5 = 6;

const Question1 = "Сколько будет 2+2?";
const Question2 = "Сколько будет 2*2?";
const Question3 =
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const Question4 =
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const Question5 = "Сколько будет 2+2*2?";

let correctAnswers = 0;
let incorrectAnswers = 0;

const Answer1 = +prompt(Question1);
if (Answer1 === correctAnswer1) {
  alert("Ответ верный");
  correctAnswers + 1;
} else {
  alert("Неверно!!");
  incorrectAnswers + 1;
}

const Answer2 = +prompt(Question2);
if (Answer2 === correctAnswer2) {
  alert("Ответ верный");
  correctAnswers = correctAnswers + 1;
} else {
  alert("Неверно!!");
  incorrectAnswers = incorrectAnswers + 1;
}

const Answer3 = +prompt(Question3);
if (Answer3 === correctAnswer3) {
  alert("Ответ верный");
  correctAnswers = correctAnswers + 1;
} else {
  alert("Неверно!!");
  incorrectAnswers = incorrectAnswers + 1;
}
const Answer4 = +prompt(Question4);
if (Answer4 === correctAnswer4) {
  alert("Ответ верный");
  correctAnswers = correctAnswers + 1;
} else {
  alert("Неверно!!");
  incorrectAnswers = incorrectAnswers + 1;
}

const Answer5 = +prompt(Question5);
if (Answer5 === correctAnswer5) {
  alert("Ответ верный");
  correctAnswers = correctAnswers + 1;
} else {
  alert("Неверно!!");
  incorrectAnswers = incorrectAnswers + 1;
}

alert(
  `Конец теста!! правильных ответов: ${correctAnswers}; неправильных ответов: ${incorrectAnswers}`
);
