// Stack and heap memory

//Stack(primitive) Heap(Reference type)

let username = "Shreyansh";

let changeName = username;

changeName = "Sneha"

console.log(username); //It is because primitive types sends copy 

let user = {
    email:"shreyansh@gmail.com",
    age:19
}

let user2 = user

user2.email = "kumarshreyansh07@gmail.com";
console.log(user.email);
console.log(user2.email); //Reference type




