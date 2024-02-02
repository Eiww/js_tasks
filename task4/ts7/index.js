let javaScriptDescription =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

console.log(javaScriptDescription);
descrLength = javaScriptDescription.length / 2;

console.log(descrLength);

javaScriptDescription = javaScriptDescription.slice(1, descrLength);

javaScriptDescription = javaScriptDescription.replaceAll("а", "А");

javaScriptDescription = javaScriptDescription.replaceAll(" ", "");

javaSymbolIndex =
  (javaScriptDescription, javaScriptDescription, javaScriptDescription).length /
  2;
javaSymbolIndex = Math.floor(javaSymbolIndex);

console.log(javaScriptDescription[javaSymbolIndex]);

console.log(javaScriptDescription);
