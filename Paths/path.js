//Path module is used to handle and transform file paths.
const path = require("path");

//path.normalize(path) reduces '..' and '.' parts. Multiple slashes are replaced with single ones.
let normalize = path.normalize("Folder/Folder1/Folder2/..");
console.log("Normalization: ",normalize);

//path.join(...path) joins all the arguments together and normalize the resulting path
let join = path.join("Folder","Folder1","Folder2","..");
console.log("Join: ",join);

//path.resolve() resolves an absolute path
//Right most parameter is considered as {to} while other parameters are considered an array of {from}
let resolve = path.resolve("Folder","Folder1","Folder2","..");
console.log("Resolve: ",resolve);

//path.isAbsolute(path) determines whether path is an absolute path
//It returns a boolean
let absolute=path.isAbsolute("Folder");
console.log("Absolute Path: ",absolute);

//path.relative(from,to) solves the relative path from "from" to "to"
let relative=path.relative("Folder","Folder1");
console.log("Relative Path: ",relative);

//path.dirname(path) returns the directory name of a path
let dirname = path.dirname("Folder/Folder1");
console.log("Directory Name: ",dirname);

//path.basename(path,ext) returns the last portion of a path
let basename = path.basename("Folder/Folder1");
console.log("Basename: ",basename);

//path.extname(path) returns the extension of a path
let extname = path.extname("Folder.s");
console.log("Extension Name: ",extname);

//path.parse(pathstring) returns an object from a path string. Opposite of path.format()
let parse = path.parse("/Folder/Folder1.ext");
console.log("Parse: ",parse);

//path.format(pathobject) returns pathstring from an object
let format = path.format(parse);
console.log("Format: ",format);