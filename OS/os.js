//Node.js provides some basic os related utility functions.
const os=require("os");
//Returns the amount of free system memory in bytes.
console.log("os.freemem(): \n",os.freemem()); 
//Returns Home directory of the current user. 
console.log("os.homedir(): \n",os.homedir());  
//Returns hostname of the operating system
console.log("os.hostname(): \n",os.hostname()); 
//Returns the endianness of the cpu. Possible values are: 'BE' - big endian, 'LE' - little endian. 
console.log("os.endianness(): \n",os.endianness());  
//Returns the load average time taken by system activity.
console.log("os.loadavg(): \n",os.loadavg()); 
//Returns the os platform of the running computer i.e darwin, linus, win32 
console.log("os.platform(): \n",os.platform());  
//Returns the release
console.log("os.release(): \n",os.release());  
//Returns the os's default dir for temporary files
console.log("os.tmpdir(): \n",os.tmpdir()); 
//Returns the total amount of system memory in bytes. 
console.log("os.totalmem(): \n",os.totalmem());  
//Returns os name
console.log("os.type(): \n",os.type());  
//Returns system uptime in secs.
console.log("os.uptime(): \n",os.uptime());
//Returns all the network interfaces
console.log("os.networkInterfaces(): \n",os.networkInterfaces());
//Fetches an array of objects containing info about each cpu/core installed
console.log("os.cpus(): \n",os.cpus());  
//Fetches the os cpu architecture
console.log("os.arch(): \n",os.arch());  