const user = {
    username:"shreyansh",
    price:999,

    message:function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

user.message();
user.username = "Sneha gupta";
user.message();
