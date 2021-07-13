//Node.js provides ability to perform socket programming
//Node.js net module contains functions for creating both servers and clients
const net=require("net");
let server=net.createServer((socket)=>{
    socket.end("goodbye\n");
}).on("error",(err)=>{
    console.log(err);
});
//grab a random port
server.listen(()=>{
    address = server.address();
    console.log("Opened server on ", address);
});