const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  if (x === "exit") {

    rl.close();
  }
  else {
    console.log(x);
  }
  // console.log() 출력
  
}).on("close", function () {
  process.exit();
});