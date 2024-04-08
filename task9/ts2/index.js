const nextBirthdayDate = new Date(2024, 8, 4);

function convertMsToDays(ms) {
  const oneDay = 24 * 60 * 60 * 1000; // 1 день в миллисекундах
  return Math.floor(ms / oneDay);
}

function getDaysBeforeBirthday(nextBirthdayDate) {
  const today = new Date();
  const timeDifference = nextBirthdayDate.getTime() - today.getTime();
  return convertMsToDays(timeDifference);
}

console.log(getDaysBeforeBirthday(nextBirthdayDate));
