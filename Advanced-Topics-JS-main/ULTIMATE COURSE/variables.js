const link="https://dummyjson.com/users";
const user=fetch(link);
console.log(user);
user.then((ahmed)=>{
  console.log(ahmed);
return ahmed.json();
}).then((data)=>{
  console.log(data.users);
})


console.log("hiiiiiiii end");
