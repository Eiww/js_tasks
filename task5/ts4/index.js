for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt("Введите имя нового студента! ");
  newStudent = newStudent.trim();

  if (newStudent) {
    alert(`Добро пожаловать ${newStudent}!`);
  }
}
