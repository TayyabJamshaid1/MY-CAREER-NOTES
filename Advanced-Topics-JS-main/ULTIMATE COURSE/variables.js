let arrayValue = [12,35,1,10,34,1];
function FindKNumbers(arr,k){

let size=arr.length;

if (size<k){
  k=k%size
}
let newArray=arr.splice(size-k,k)
arr.unshift(...newArray)
return arr

}

console.log(FindKNumbers(arrayValue,7));
