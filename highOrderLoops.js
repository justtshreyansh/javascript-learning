//for of loop

const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}

const greeting  = "Hello world!"
for(const greet of greeting){
    console.log(greet);
}

//Map => map are iterable through for of loop

const map = new Map();
map.set("IN","India");
map.set("USA","United state of america")
map.set("Ca","California")

for(const [i,j] of map){
    console.log(i,":-",j);
}

//for in loop

const myObject = {
    js:"JavaScript",
    cpp:"C++",
    py:"python",
    tsx:"Typescript"
}

for(const i in myObject){
    console.log(`${i} is shortcut of ${myObject[i]}`);
}

//for each loop

const coding = ["javascript","python","html","css","c++"];
coding.forEach(function(val){
    console.log(val);
})