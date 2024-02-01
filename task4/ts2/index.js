const myName = "Юлия";
const progammingLanguage = "JavaScript";
const courseCreatorName = "Никита Михайлович";
const reasonText = "потому что это востребованная и прибыльная профессия";
const numberOfMonth = "3";

let myInfoText = `Всем привет! Меня зовут ${myName}. 
Я изучаю язык программирования ${progammingLanguage} на курсе 
по ${progammingLanguage} у ${courseCreatorName}. 
Я уверена, что пройду данный курс до конца!`;

console.log(myInfoText);

myInfoText = myInfoText.replaceAll(
  progammingLanguage,
  progammingLanguage.toUpperCase()
);

console.log(progammingLanguage);
console.log(myInfoText);

console.log("первый символ", myInfoText[0]);

console.log(myInfoText.length - 1);
console.log("последний символ", myInfoText[161]);
