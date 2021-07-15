//StringDecoder is used to docode buffer into string.
//It is similar to Buffer.toString() only that it provides extra support to UTF

//Import 'string_decoder' to use StringDecoder module
const StringDecoder= require("string_decoder").StringDecoder;
const decoder = new StringDecoder('utf-8');
let str = "Hello There";

//Create a buffer
const buff = new Buffer.alloc(str.length,str,"utf-8");

//Decode the buffer
//decoder.write(buffer) returns the decoded string
let decode=decoder.write(buff);
console.log("Decoded buffer:",decode);
//decoder.end() returns the trailing bytes
console.log("Trailing Bytes: ",decoder.end());
