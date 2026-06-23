// Primitive
//  7 types : string, Number, Boolean, Symbol, Null, Undefined, BigInt 



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//  console.log(id=== anotherId);



// Reference(Non primitive)
// Array, objects, Functions

const heroes = ["Batman","Deadpool","Wolverine"];
let myObj = {
    name:"Amaan",
    age: 22
}

const myFunction = function(){
    console.log("Hello world!"); 
    
}
// console.log(typeof myFunction);

// ----------------------------------------------------------

// Stack(Primitive), Heap (Non-Primitive)

let myName="Amaan"

let anotherName = myName
anotherName = "Mohd"

console.log(myName);
console.log(anotherName);

let user1 = {
    email:"amaan@yahoo.com",
    upi:"amaan@axl"
}

let user2 = user1
user2.email = "amaan@google.com "

console.log(user1.email);
console.log(user2.email);




