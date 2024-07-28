const fs = require("fs");

const readStream = fs.createReadStream("./files/textfile.txt", "utf8");

// let counter = 0;

// whenever data is available to read data event will be fired
readStream.on("data", (chunkData) => {
  //   counter++;
  //   console.log(`New chunk reveived ${counter}`, chunkData);
  console.log(`New chunk reveived`, chunkData);
});

// this event is fired when no more data is avaialable to read
readStream.on("end", () => {
  console.log("finishing reading the file");
});

// this event is fired when ever some error occured while reading the file
readStream.on("error", (err) => {
  console.log("Error occured while reading the file", err);
});
