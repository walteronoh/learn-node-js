//Piping the Stream
//Mechanism where we provide the output of one stream as the input to another stream.
//Example Piping the output.txt data to the input.txt file
const fs = require("fs");
//create a readable Stream
let readerStream = fs.createReadStream("output.txt");
//create a writable Stream
let writerStream = fs.createWriteStream("input.txt");
readerStream.pipe(writerStream);
console.log("Piping Was successfull");