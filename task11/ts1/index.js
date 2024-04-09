//создание элемента <form>
var formElement = document.createElement("form");
formElement.className = "create-user-form";

//создание <label> и <input> для имени
var nameLabel = document.createElement("label");
nameLabel.textContent = "Имя";
var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "userName";
nameInput.placeholder = "Введите ваше имя";

//создание <label> и <input> для пароля
var passwordLabel = document.createElement("label");
passwordLabel.textContent = "Пароль";
var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.name = "password";
passwordInput.placeholder = "Придумайте Пароль";

//создание <button>
var submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Подтвердить";

//добавление элементов в форму
formElement.appendChild(nameLabel);
formElement.appendChild(nameInput);
formElement.appendChild(passwordLabel);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);

//добавление формы в <body>
document.body.innerHTML = ""; //очистка body от предыдущего содержимого
document.body.appendChild(formElement);

//через document.createElement

// создание элемента <form>
// var formElement = document.createElement("form");
// formElement.className = "create-user-form";

// //создание <label> и <input> для имени
// var nameLabel = document.createElement("label");
// nameLabel.text;
