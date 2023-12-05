const newArr = [0,1,2,3,4,5]
console.log(newArr)

const newArr2 = new Array(5,4,3,2,1,0);
console.log(newArr2);

//Methods 
console.log(newArr)

newArr.push(6);
console.log(newArr)

newArr.pop();
console.log(newArr)

newArr.unshift(-1);
console.log(newArr)

newArr.shift();
console.log(newArr)


const newArr3 = newArr.slice(1,3);//start from 1 and goes till 3-1
console.log(newArr3)

const newArr4 = newArr.splice(2,4);//start and how many number to take
console.log(newArr4);
console.log(newArr);

