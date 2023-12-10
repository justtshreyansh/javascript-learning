//Conditional flow

// if

if(true){

}
else{

}

//nullish coalescing operator (??)
let val1;
val1 = 5 ?? 10;
console.log(val1);

val1=  null ?? 10;
console.log(val1);


//unary operator 

let isLoggedIn = true;
isLoggedIn ? console.log("User is logged in"):console.log("user is not logged in");