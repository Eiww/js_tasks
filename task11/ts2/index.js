const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

const taskList = document.createElement("div");
taskList.classList.add("tasks-list");

tasks.forEach((task) => {
  const taskItem = document.createElement("div");
  taskItem.setAttribute("data-task-id", task.id);
  taskItem.innerHTML = `
    <div class="task-item__main-container">
      <div class="task-item__main-content">
        <form class="checkbox-form">
          <input
            class="checkbox-form__checkbox"
            type="checkbox"
            id=${task.id}
          />
          <label for=${task.id}></label>
        </form>
        <span class="task-item__text">
          ${task.text}
        </span>
      </div>
      <button
        class="task-item__delete-button default-button delete-button"
        data-delete-task-id="5"
      >
        Удалить
      </button>
    </div>
  `;

  taskList.append(taskItem);
});

document.body.append(taskList);
