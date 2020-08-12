var fs = require("fs");
var data = fs.readFileSync('../static/input01.txt');
console.log(data.toString());
console.log("程序执行结束!");