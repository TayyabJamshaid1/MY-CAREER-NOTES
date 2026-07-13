let names=["Tayyab Jamshaid","Hafiz Amir Attari Khan"]



let res=names.map((item)=>{
let name=item.trim().split(/\s+/)
let firstName=name[0]
let lastName=name.length>1?name[name.length-1]:undefined;
let middleName=name.length>2?name.slice(1,-1).join(" "):undefined
return {firstName,lastName,middleName}
})

console.log(res);
