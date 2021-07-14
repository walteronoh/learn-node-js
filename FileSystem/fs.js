//Synchronous vs Asynchronous in File System
//Asynchronous method takes the last parameter as the completion for callback and the first parameter of the callback as error.
//Import the fs module
const fs = require("fs");
//Create a file named output.txt and add some content

//Asynchronous read
function asyncRead(){
    //readFile() method asynchronousy reads the entire content of a file.
   fs.readFile("output.txt",(err,data)=>{
       if(err){
           console.log(err);
       }else{
           //The data that is returned is raw hence it is converted to string using toString() method.
           console.log("Asynchronous Read:\n",data.toString());
       }
   })
}
//asyncRead();

//Synchronous Read
function syncRead(){
    //readFileSync() methos synchronously reads the entire content of a file.
    let data=fs.readFileSync("output.txt");
    // data is then converted to string using toString() method
    console.log("Synchronous Read:\n",data.toString())
}
//syncRead();

//Open a file
//Asynchronous open file
function openFile(){
    //fs.open() method is used to open a file
    //Syntax: fs.open(path,flags,[mode],callback)
    //path - Specifies the name of the file and also the filepath
    //flags - Indicates the behavior of the file to be opened
    //mode - It sets the file mode
    //callback - callback function
    fs.open("output.txt","r",(err,fd)=>{
        //fd is the file descriptor
        if(err){
            console.log(err);
        }else{
            console.log("File Opened Successfully");
        }
    });
}
//openFile();

//Get file Information
function getFileInfo(){
    //fs.stat(path,callback) method is used to get file Information
    fs.stat("output.txt",(err,stats)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File Information:\n",stats);
        }
    });
}
//getFileInfo();

//Writing into a file
function writeInFile(){
//fs.writeFile(path,data,callback) is used to asynchronously write data into a file
//data is the content that is going to be written into the file
fs.writeFile("input.txt","Writing Asynchronously",(err)=>{
    console.log(err);
});
console.log("Data has been written successfully");
fs.readFile("input.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("The following is the written content: \n",data.toString());
    }
})
}
//writeInFile();

//Reading a file and closing
function readFile(){
   let buf=new Buffer.allocUnsafe(1024);
   //Open an existing file
   fs.open("output.txt","r",(err,fd)=>{
       if(err){
           console.log(err);
       }else{
           //fs.read(fd,buffer,offset,length,callback)
           // fd - file description from the fs.open() method
           // buffer - buffer that the data will be written
           // offset - Index in the buffer to start writing
           // length - Numbet of bytes to read
           // callback - Callback Function
           fs.read(fd,buf,0,buf.length,0,(err,bytesRead,buffer)=>{
               if(err){
                   console.log(err);
               }else{
                   console.log("Bytes Read:",bytesRead);
                   //Print only read bytes to avoid junk
                   console.log(buffer.slice(0,bytesRead).toString());
                   fs.close(fd,(err)=>{
                       if(err){
                           console.log(err);
                       }else{
                           console.log("File Has Been Closed Successfully");
                       }
                   })
               }
           });
       }
   });
}
//readFile();

//Deleting a file
function deleteFile(){
    //fs.unlink(path,callback) is used to delete a file
    fs.unlink("path to file",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File Has Been Deleted");
        }
    })
}
//deleteFile();

//Creating a directory
function createDir(){
    //fs.mkdir(path,mode,callback) is used to create a directory
    fs.mkdir("New Folder",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("New File Directory Has Been Created");
        }
    })
}
//createDir();

//Reading a file Directory
function readDir(){
    //fs.readdir(path,callback) is used to read a directory
    fs.readdir("New Folder",(err,files)=>{
        if(err){
            console.log(err);
        }else{
            console.log("The directory exists");
            console.log(files);
        }
    });
}
//readDir();

//Remove a directory
function removeDir(){
    //fs.rmdir(path,callback) is used to remove a directory
    fs.rmdir("New Folder",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("The File Directory Has Been Deleted");
        }
    })
}
//removeDir();