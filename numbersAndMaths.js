const score = 400 //General way of assiging a number
console.log(score) 

const numbers = new Number(100.765);//It is sure that the given number is in number form
console.log(numbers)

//Methods on numbers

console.log(numbers.toFixed(3));//Give 3 digit after decimal

console.log(numbers.toPrecision(4));//Give 4 digit precision

const hundreds = 1000000;

console.log(hundreds.toLocaleString()); //Covert them into a form where numbers are separated by commas

console.log(hundreds.toString());//Convert the number into string
console.log(hundreds.toString().length);//Find the length of the string

/* **********************Maths******************** */

console.log(Math);

console.log(Math.abs(-4)); //Conver the number into absolute value
console.log(Math.round(4.5)); //Round off the value
console.log(Math.ceil(4.1));//Find the ceil value
console.log(Math.floor(4.9)); //find the floor value
console.log(Math.sqrt(4));//Find the square root of the given number


