
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userinput=[];

inp.on("line", (data) => {
  userinput.push(data);
});
inp.on("close",()=>{
    let tmp=[];
    let arr=[];
    for(var i=1;i<userinput.length;i++){
        tmp.push(userinput[i].split(" "));
    }
    for(var j=0;j<tmp.length;j++){
        for(var k=0;k<tmp[j].length;k++){
            arr.push(tmp[j][k]);
        }
    }

    //Sort
    for(var w=0;w<arr.length-1;w++){
        for(var e=0;e<arr.length-1-w;e++){
            if((+arr[e])>(+arr[e+1])){
                let min=arr[e+1];
                arr[e+1]=arr[e];
                arr[e]=min;
            }
        }
    }
    console.log(arr);
});
    
