// Modules
const names = require('./3-filename');
const myFun = require('./4-sayhi');




myFun('susan');
myFun(names.john);
myFun(names.peter);

console.log("module::", module);
