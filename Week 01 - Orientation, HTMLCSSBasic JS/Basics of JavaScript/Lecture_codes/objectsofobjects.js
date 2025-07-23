// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function above18male(users){
    let person = users.filter((user)=> user.age > 18 && user.gender === "male");

    return person;
}


let users = [
  {
    name: "Bharat",
    age: 21,
    gender: "male",
  },
  {
    name: "Priya",
    age: 22,
    gender: "female",
  },
  {
    name: "Rani",
    age: 15,
    gender: "female",
  },
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Rahul",
    age: 17,
    gender: "male",
  },
];


let alluser = above18male(users);
console.log(alluser);