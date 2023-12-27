class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`${this.username}`);
    }
}

const chai = new User("shreyansh")
chai.logMe();

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email
        this.password  = password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const tea = new Teacher("ambreesh","kumarshreyansh07@gmail.com",123);
tea.addCourse();
tea.logMe();