//Creating first node.js app
//1. Import required module
let http=require("http");
let port=8081;
//2 Create Server using the http instance
//With the listen port
http.createServer((request,response)=>{
    //Send http header
    // With: http status: '200' and content type: 'Content-type:'text/plain''
    response.writeHead(200,{"Content-Type":"text/plain"});
    //Send the response body
    response.end("Hello World");
}).listen(port);
console.log(`Running on port: 127.0.0.1:${port}`);

//Node consoles
//1. console.log() - Displays simple message on console. e.g console.log("Hello there");
//2. console.error() - Renders error message to console. e.g console.error(new Error("An error"));
//3. console.warn() - Displays warning messages on console. e.g console.warn("Are you coming?");

//REPL
//Specifies a computer environment where you can enter commands and the system responds with an output in interactive mode
// 1. Read - Reads user input.
// 2. Eval - Evaluates data structure.
// 3. Print - Prints the results.
// 4. Loop - Loops above command untill user presses ctrl+c twice.
// Starting a REPL
//    Write on cli: 'node'