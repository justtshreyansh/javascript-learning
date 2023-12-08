function one(){
    const username= "shreyansh";

    function two(){
        const website = "Codeforces";
        console.log(website);
    }
    console.log(username)

    two()
}

one()

addOne(5); //hoisting
function addOne(num){
    return num+1;
}

const addTwo = function Two(num){
    return num+2;
}
addTwo()