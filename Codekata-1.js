
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];

inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let tmp=[];
  for(var i=data1.length-1;i>=0;i--){
      tmp.push(data1[i]);
  }
  console.log(...tmp);
});
