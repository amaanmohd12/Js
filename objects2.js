//const instaUser = new Object()
const instaUser = {}

instaUser.id = "123asd"
instaUser.name = "Amaan"
instaUser.isLoggedIn = true
// console.log(instaUser);

const regularUser = {
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"Mohd",
            lastname:"Amaan"
        }
   
    }

}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [{
    id: 1,
    email: "amaan@google.com"
},
{
    id: 1,
    email: "amaan@google.com"
},{
    id: 1,
    email: "amaan@google.com"
}]
console.log (users[1].email)
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));


