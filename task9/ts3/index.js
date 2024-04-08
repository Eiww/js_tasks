function addDays(date, days = 1) {
  const timestamp = date.getTime();

  const millisecondsPerDay = 24 * 60 * 60 * 1000; //количество миллисекунд в одном дне (24 часа в сутке, 60 минут в часе, 60 секунд в минуте)
  const newTimestamp = timestamp + days * millisecondsPerDay;
  return new Date(newTimestamp);
}
const currentDate = new Date(Date.now());
console.log(addDays(currentDate, 0)); // Текущая дата
console.log(addDays(currentDate, 1)); // Следующий день
console.log(addDays(currentDate, 7)); // Неделя спустя
