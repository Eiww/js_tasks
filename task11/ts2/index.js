const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "выполнить дз после урока",
  },
];

const taskList = document.createElement("div"); //сюда будут добавляться задачи
taskList.classList.add("tasks-list"); //создается класс

tasks.forEach((task) => {
  const taskItem = document.createElement("div"); //к каждой задачи создается свой div
  taskItem.setAttribute("data-task-id", task.id); //добавляем атрибут
  taskItem.innerHTML =
    //заполняем html код для каждой задачи, добавляем чек бокс, текст и кнопку удалить
    `
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

  taskList.append(taskItem); //добавляем задачи в их список
});

document.body.append(taskList); //добавляем список на страницу

const taskForm = document.createElement("form"); //создаем форму ввода
taskForm.classList.add("create-task-block"); //добавляем класс
taskForm.innerHTML =
  //создаем поле для ввода и кнопку, после добавляем на страницу
  `
  <input placeholder="Task" class="create-task-block__input"/>
  <button type="submit">Submit</button>
`;
document.body.append(taskForm);

taskForm.addEventListener("submit", (e) => {
  //добавляем действие
  e.preventDefault();
  const input = document.querySelector(".create-task-block__input");
  const taskText = input.value.trim();
  const errorBlock = document.createElement("span");
  errorBlock.classList.add("error-message-block");

  if (taskText) {
    tasks.forEach((task) => {
      if (task.text === taskText) {
        //если совпадает, то добавления задачи не будет
        taskForm.append(errorBlock);
        errorBlock.innerText = "Такая задача уже есть!";
      }
    });
    if (errorBlock.textContent === "") {
      //если не совпало, создается новая задача
      const newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskText,
      };

      tasks.push(newTask); //и отправляется а список задач

      const newTaskItem = document.createElement("div"); //создается элемент для новой задачи
      newTaskItem.setAttribute("data-task-id", newTask.id);
      newTaskItem.innerHTML =
        //заполняем html код для задачи
        `
          <div class="task-item__main-container">
            <div class="task-item__main-content">
              <form class="checkbox-form">
                <input
                  class="checkbox-form__checkbox"
                  type="checkbox"
                  id=${newTask.id}
                />
                <label for=${newTask.id}></label>
              </form>
              <span class="task-item__text">
                ${newTask.text}
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

      taskList.append(newTaskItem); //добавляем в список задач

      const btnDelete = newTaskItem.querySelector("button"); //делаем кнопку для удаления задачи
      const id = newTaskItem.getAttribute("data-task-id");

      btnDelete.addEventListener("click", () => {
        //пишем действие
        modal.classList.remove("modal-overlay_hidden"); //удаляет
        modal.setAttribute("data-task-id", id);
      });
    }

    setTimeout(() => errorBlock.remove(), 3000); //прописываем ошибки пустого поля
    input.value = "";
  } else {
    const errorBlock = document.createElement("span");
    errorBlock.classList.add("error-message-block");
    taskForm.append(errorBlock);
    errorBlock.innerText = "Название не должно быть пустым!";

    setTimeout(() => errorBlock.remove(), 3000);
  }
});

const modal = document.querySelector(".modal-overlay"),
  modalCloseBtn = modal.querySelector(".cancel-button"),
  taskDeleteBtn = modal.querySelector(".confirm-button");

[...taskList.children].forEach((task) => {
  const btnDelete = task.querySelector("button");
  const id = task.getAttribute("data-task-id");

  btnDelete.addEventListener("click", () => {
    modal.classList.remove("modal-overlay_hidden");
    modal.setAttribute("data-task-id", id);
  });
});

taskDeleteBtn.addEventListener("click", () => {
  const taskDeleteId = modal.getAttribute("data-task-id");
  [...taskList.children].forEach((task) => {
    const taskId = task.getAttribute("data-task-id");
    if (taskId === taskDeleteId) task.remove();
  });
});
