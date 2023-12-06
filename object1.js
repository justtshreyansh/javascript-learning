//Object literals
const mysym = Symbol("shreyansh");
const jsUser = {
    name:"Shreyansh",
    "fullName":"Shreyansh Singh",
    [mysym]:"mykey1", //How to use symbol in javascript objects
    age: 19,
    location: "Greater Noida",
    email: "kumarshreyansh07@gmail.com",
    isLoggedIn: false
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mysym]);


jsUser.email = "kumarshreyansh@gmail.com";//use to modify the value of any keys

// Object.freeze(jsUser); //Freeze so that any value cannot be modified
jsUser.email = "RaushanShahi@gmail.com";
console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo  = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpolation -> using backticks //this used for accessing current object property
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());