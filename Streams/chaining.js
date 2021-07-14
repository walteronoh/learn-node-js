//Mechanism to connect the output of one stream to another stream and create a chain of multilple stream operations
//Require the filesystem module
const fs = require("fs");
const { cpuUsage } = require("process");
//Require the compress module
const zlib = require("zlib");

//Create a file named compress.txt and add some content
//Compress the compress.txt to compress.txt.gz
function compress(){
    fs.createReadStream("compress.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("compress.txt.gz"));
    console.log("compress.txt has been compressed to compress.txt.gz");
}
//compress();

//Decompressing the compress.txt.gz to decompress.txt
function decompress(){
    fs.createReadStream("compress.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("decompress.txt"));
    console.log("compress.txt.gz has been decompressed to decompress.txt");
}
//decompress();