// singleton 
// obejct.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Amaan",
    "full name":"Mohd Amaan",
    [mySym]:"mykey1",
    age: 20,
    location:"Bareilly",
    email:"amaan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "amaan@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "amaan@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");

}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






