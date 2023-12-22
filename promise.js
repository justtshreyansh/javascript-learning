const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is executed");
        resolve(); //used to connect then and resolve
    },1000)
})

promiseOne.then(function(){
    console.log("Promise completed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is executed");
        resolve(); //used to connect then and resolve
    },1000)
}).then(function(){
    console.log("Promise 2 completed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise 3");
        resolve({username:"Shreyansh",userEmail:"Shreyanshsingh@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Shreyansh",userEmail:"kumarshreyansh07@gmail.com"});
        }
        else{
            reject("Error:Something went wrong");
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"));


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Javascript",userEmail:"kumarshreyansh07@gmail.com"});
        }
        else{
            reject("Error:JS went wrong");
        }
    },1000)
})

async function consumepromiseFive(){
    try {
        const response  = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive();