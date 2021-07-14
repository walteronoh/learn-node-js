//Streams are objects that let you read data from a source and write data to a destination in continuous fashion
//Types of Streams
// 1. Readable - Used for read operation
// 2. Writeable - Used for write operation
// 3. Duplex - Used for both readable and writable operations.
// 4. Transform - Type of duplex stream where the output is computed based on the input.

//Each Stream is an EventEmitter instance
//Commonly used events
// 1. Data - Fired when there is an available data to read
// 2. End - Fired when there is more data available to read
// 3. Error - Fired when there is any error while receiving or writing data
// 4. Finish - Fired when all the data has been flushed to the underlying system

//Require file system module
const fs = require("fs");

//Reading from a stream
let data = "";
// Create a file named output.txt and add some content
//create a readable stream and include path for the created file "output.txt"
let readerStream = fs.createReadStream("output.txt");
//Set encoding
readerStream.setEncoding("utf-8");
//Handle stream events
// data event
readerStream.on("data", (chunk) => {
    data += chunk;
});
//end event
readerStream.on("end",()=>{
    console.log("The Stream Data: ",data);
});
//error event
readerStream.on("error",(err)=>{
    console.log(err);
});


//Writing to a stream
let input_data = "Writing Our First Data In A Stream";
//Create a file named input.txt
//Create a writable Stream
let writerStream = fs.createWriteStream("input.txt");
//Write the data to the stream with utf-8 encoding
writerStream.write(input_data,"utf-8");
//Mark the end of file
writerStream.end();

//Hundle Stream events
// finish event
writerStream.on("finish",()=>{
    console.log("Write Completed");
});
// error event
writerStream.on("error",(err)=>{
    console.log(err);
});