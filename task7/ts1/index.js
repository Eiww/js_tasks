const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "ААртем",
  "Глеб",
];

console.log(peopleWaiting);

function giveParsel() {
  alert(
    `${peopleWaiting[0]} покидает очередь с посылкой. в очереди ${
      peopleWaiting.length - 1
    }`
  );
  peopleWaiting.shift();
}

giveParsel();
console.log(peopleWaiting);

giveParsel();
console.log(peopleWaiting);

giveParsel();
console.log(peopleWaiting);

function leaveQueueWithoutParsel() {
  alert(`${peopleWaiting[0]} не получает посылку и уходит`);
  peopleWaiting.shift();
}

leaveQueueWithoutParsel();
leaveQueueWithoutParsel();
leaveQueueWithoutParsel();
leaveQueueWithoutParsel();
