//v8 module represents interfaces and event specific to the version of v8
//It provides methods to get information about heap memory.

//Import the v8 module
const v8 = require("v8");

//v8.getHeapStatistics() method returns statistics about heap
let heap_stats = v8.getHeapStatistics();
console.log("Heap Statistics: \n",heap_stats);

//v8.getHeapSpaceStatistics() method returns statistics about heap space.
let heap_space = v8.getHeapSpaceStatistics();
console.log("Heap Space: \n",heap_space);