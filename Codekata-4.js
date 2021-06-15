
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];

inp.on("line", (data) => {
  a.push(data);
  });
inp.on("close",()=>{
    data1=a[1].split(" ");
    data2=+(a[0]);
    let tmp=[];
    for(var i=1;i<data2+1;i++){
        tmp.push(i);
    }
    for(var j=0;j<tmp.length;j++){
        let count=0;
        for(var k=0;k<data1.length;k++){
            if(tmp[j]==data1[k]){
                count+=1;
            }
        }
        if(count===0){
            console.log(tmp[j]);
        }
    }
})
