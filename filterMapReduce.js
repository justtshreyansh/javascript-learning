const coding = ["javascript","python","ruby","typescript","c++"]

const values = coding.forEach((item)=>{
    console.log(item);
})

console.log(values); //for each loop doesnot return any value

//filter

const value =  [1,2,3,4,5,6,7,8,9,10]

const myValues = value.filter((num)=> num>4);
console.log(myValues);