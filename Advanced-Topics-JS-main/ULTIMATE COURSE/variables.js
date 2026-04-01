let names=["Tayyab Jamshaid","Hafiz Amir Attari Khan"]

let refirmedNames=names.map((item)=>{
  let firstName,lastName,middleName; 
  let data=item.trim("").split(/\s+/)

  firstName=data[0];
  lastName=data.length>1?data[data.length-1]:undefined;
  middleName=data.length>2?data.slice(1,-1).join(" "):undefined;
  return {firstName,lastName,middleName}
})

console.log(refirmedNames);
