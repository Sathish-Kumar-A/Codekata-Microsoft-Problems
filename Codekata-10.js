
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
 a=data;
 let b="";
let tmp=[];
let tmp1=[];
let max=0;

// permutating characters in the string for all possible values
for(var i=0;i<a.length;i++){
    let str='';
    for(var j=i;j<a.length;j++){
        str+=a[j];
        tmp.push(str);
    }
}
// reversing the given string
for(var k=a.length-1;k>=0;k--){
    b+=a[k];
}
//permutating the reversed string characters for all possible values
for(var w=0;w<b.length;w++){
    let str1='';
    for(var e=w;e<b.length;e++){
        str1+=b[e];
        tmp1.push(str1);}}
//Finding the maximum String length

for(var f=0;f<tmp.length;f++){
    for(var d=0;d<tmp1.length;d++){
        if(tmp[f]==tmp1[d]){
            if(tmp[f].length>max){
                max=tmp[f].length;
            }
            }
        }
    }

console.log(max);
});
