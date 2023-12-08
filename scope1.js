let a  = 200; //local scope
var b= 300 //global scope

{
    let a  = 20
    console.log("INNER:",a);
}
console.log(b); 
console.log("OUTER:",a);