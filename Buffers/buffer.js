//Buffer class is used to store raw data.
//Methods of creating a buffer
// 1. Create an uninitiated buffer
let uninit_buf = new Buffer.allocUnsafe(10);
console.log("Uninitiated Buffer: ",uninit_buf);
// 2. Create a buffer from array
let arr_buf = new Buffer.from([10,20,30]);
console.log("Buffer from array: ",arr_buf);
// 3. Create a buffer from a string
let str_buf = new Buffer.alloc(10,"Hello There","utf-8");
console.log("Buffer from string: ",str_buf);

//Writing to buffers
//Syntax : write(string,[offset],[length],[encoding])
// string - Specifies the string data to be written to buffer
// offset - Specifies the index of the buffer to start writing at.
// length - Specifies the number of bytes to write
// encoding - Encoding to use

let write_buff = str_buf.write("hello from the other side",1,7,"utf-8");
console.log("The number of octets written: ",write_buff);

//Reading from buffer
//Syntax : toString("encoding",[start],[end]);
// start - Beginning index to start reading. defaults to 0.
// end - Specifies the last index to end the reading. default is the complete buffer

for(let k=0; k<10; k++){
    uninit_buf[k] = k +97;
}
let read_buff = uninit_buf.toString("ascii",0,8);
console.log(read_buff)