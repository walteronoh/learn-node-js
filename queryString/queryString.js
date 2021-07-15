//Query String can be used to convert query string into JSON object and vice versa

//Import "querysting"
const querystring=require("querystring");

//Converting query string into JSON object
let str_obj = querystring.parse("greetings=Hello There");
console.log("Query string to JSON object",str_obj);

//Converting JSON object to query string
let obj_str = querystring.stringify(str_obj);
console.log("JSON object to string",obj_str)