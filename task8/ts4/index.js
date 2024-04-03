const student = {
  fullName: "maxim",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
};

function giveJobToStudent(student, jobName) {
  alert(
    `поздравляем!! у студента ${student.fullName} появилась новая работа! теперь он ${jobName}`
  );
}

const updateStuent = giveJobToStudent(student, "веб-разработчик");

updateStuent = {
  fullName: "maxim",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  job: "веб-разработчик",
};

giveJobToStudent(student, jobName);
