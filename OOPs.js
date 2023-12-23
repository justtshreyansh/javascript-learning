// JavaScript and classes
//JavaScript is prototype based language.

//Object  - > collection of properties and methods

//parts of OOPs
 //object literal
 //constructor function
 //prototypes 
 //classes
 //instance (new,this)

// 4 pilllars of OOP
 //-> Abstraction -> detail hide kar dena
 //->Encapsulation -> wrapper laga dena
 //->Inheritance ->
 //->polymorphism-> same thing ko alag alag jagah alag alag tarike se use karna


 const user = {
    username:"Shreyansh",
    loginCount:5,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
    }
 };
 console.log(user.username);
 console.log(user.getUserDetails());