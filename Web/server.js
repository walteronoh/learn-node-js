//Creating a web server
//import modules : http, fs and url
const http = require("http");
const fs= require("fs");
const url = require("url");

//Create server
http.createServer((request,response)=>{
   //Parse the request containing file name
   //Check the url of the current request
   let pathname = url.parse(request.url).pathname;
   
   //Print the name of the file from which request is made
   console.log(pathname)
   //Read the requested file content from file system
   fs.readFile(pathname.substr(1),(err,data)=>{
       if(err){
           console.log(err);
           //HTTP:404: not found
           response.writeHead(404,{"Content-Type":"text/html"});
       }else{
           //Page found
           //HTTP:200: Ok
           response.writeHead(200,{"Content-Type":"text/html"});
           //write the content of the file to response body
           response.write(data.toString());
       }
       //Send the response body
       response.end();
   });
}).listen(8080);
console.log("Server running at port 127.0.0.1:8080");