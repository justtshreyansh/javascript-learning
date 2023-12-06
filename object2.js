const obj1= {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
const obj4 = Object.assign({},obj1,obj2,obj3); //Target and sources
console.log(obj4);
const obj5 ={...obj1,...obj2,...obj3};
console.log(obj5);


//Arrays of objects

const arr=[
    {
        id:1,
        name:"Shreyansh"
    },
    {
        id:2,
        name:"Sneha"
    },
    {
        id:3,
        name:"Raushan"
    }
]
console.log(arr);
console.log(arr[1].name);
console.log(Object.keys(obj1)) //return array of keys
console.log(Object.values(obj1))//Return array of values of keys
console.log(Object.entries(obj1))//return arrays of each key value pair
