let s="Hello World "

let count=0;
let n=s.length-1;
while(n>=0){
if (s[n] !==" ") break;
--n

}
console.log(n)
while(n>=0){
if (s[n] ==" ") break;
++count
--n

}

console.log(count)