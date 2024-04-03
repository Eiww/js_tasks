function handleOblect(obj, key, action) {
  if (action === "delete") {
    delete obj[key];
    return obj;
  } else if (action === "get") {
    return obj[key];
  } else if (action === "add") {
    obj[key] = "";
    return obj;
  } else {
    return obj;
  }
}

const student = {
  name: "maxim",
  programmingLanguage: "javascript",
};

const result = handleOblect(student, "programmingLanguage", "delete");

console.log("result", result);
