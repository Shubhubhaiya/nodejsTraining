const fs = require("fs");

const writeStream = fs.createWriteStream("./files/output.txt");

writeStream.write("Hello this is my line1\n");

// this event is fired when no more data is available to write
writeStream.end(() => {
  console.log("No more data is available for writing");
});

// Indicates that the stream has been ended and all data has been flushed.
// this triggers after end method
writeStream.on("finish", () => {
  console.log("finish the file");
});

// this event is fired when there is some error occured while writing files
writeStream.on("error", (err) => {
  console.log("Error occcured while writing the file", err);
});
