class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    capitalize(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new user("shreyansh","kumarhshreyansh07@gmail.com","123");
console.log(chai.encryptPassword())
console.log(chai.capitalize())


//we can do this with function too

function Users(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new Users("ambreesh","ambreesh@gmail.com","123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
