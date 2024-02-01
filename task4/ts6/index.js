userText = prompt("Введите текст").trim();

wordFromText = prompt("Введите слово из текста").trim();

indexOfWord = userText.indexOf(wordFromText);

userText = userText.slice(indexOfWord);

alert(`результат: ${userText}`);
