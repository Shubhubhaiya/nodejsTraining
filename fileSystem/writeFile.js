const fs = require("fs");
const content = require("./fileContent");
const filePath = "input.txt";

// writing files  synchronous
fs.writeFileSync(filePath, content);
console.log("write operation completed");

// Asynchronous code
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.log("Error occured", err);
  } else {
    console.log("File done");
  }
});

console.log("file operation completed");
