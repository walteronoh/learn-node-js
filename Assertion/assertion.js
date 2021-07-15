//Assertion testing
//Assert is the most elementary way to write tests.
//It provides no feedback when running your test unless one fails
//Assert is not a testing framework

//Import the assert module
const assert = require("assert");

let sum = 2+3;
//It will not provide any output unless the test fails.
assert(sum === 5);