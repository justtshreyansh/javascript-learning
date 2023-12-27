class User{
    constructor(email,password){
        this.email = email
        this.password =  password
    }

    get email(){
        return this.Email.toLowerCase();
    }
    set email(value){
        return this.Email = value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const shreyansh = new User("Shreyansh@gmail.com","shreyansh");
console.log(shreyansh.password)
console.log(shreyansh.email)