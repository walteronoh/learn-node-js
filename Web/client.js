//Create a web client
const http = require("http");

//Options to be used by request
let options={
    host:'localhost',
    port:'8081',
    path:'/index.html'
};

//Callback function is used to deal with response
let callback = (response)=>{
    //Continuously update stream with data
    let body = "";
    response.on("data",(data)=>{
        body +=data;
    });
    response.on("end",()=>{
        //Data Received completely
        console.log(body);
    });
}
//Make a request to the server
let request = http.request(options,callback);
request.end();