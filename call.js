function setUserName(username){
    this.username = username;
    console.log("Shreyansh singh")
}

function createUser(username,email,password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@fb",123);
console.log(chai);