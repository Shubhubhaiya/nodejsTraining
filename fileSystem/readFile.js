const fs = require("fs");
const filePath = "input.txt";

// Reading file data synchronously

const fileBufferData = fs.readFileSync(filePath);
console.log(fileBufferData.toString());

// Reading file data asynchronously

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log("Error occcured", err);
  } else {
    console.log(data.toString());
  }
});

// const name = "Nitesh";
// const bufferData = Buffer.from(name);
// console.log(bufferData.toString());
