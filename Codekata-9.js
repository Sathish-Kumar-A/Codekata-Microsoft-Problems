
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
 a=data;
 let str='';
 let i=0;
 while(i<a.length){
     if(a[i]==a[i+1]){
         i+=2;
     }
     else{
         str+=a[i];
         i+=1
     }
 }
 console.log(str);

});
    
