function sayMyName(){
    console.log("Anup chand");
    
}

// sayMyName();

// function AddTwoNumbers (x, y)  {
    
//     if( !isNaN(x) && !isNaN(y))
//     {
//         return x + y;
//     }
//     else{
//         console.log("Please enter number");
//     }
    
    
// }



function addNumer (x, y){
    return  x+ y;
}

const result = addNumer(1,2);

console.log("Result: ", result);



// console.log(AddTwoNumbers(1,3));

// console.log(AddTwoNumbers(5, "10"));  
// // 15

// console.log(AddTwoNumbers("3.5", "2.5")); 
// // 6

// console.log(AddTwoNumbers("a", 5));   
// Logs: Please enter valid numbers.............

function loginUser(user = "default")
{
    
    return `${user} just logged in`;
    
}

// console.log(loginUser());
// console.log(loginUser("Admin"));


function addToCart(...num1) // ... is a rest operator
{
    return  num1;
}

// console.log(addToCart(200,400, 600));


const myInfo = {
    name  : "Anup Chand",
    age : 22
}

const myArray = [233, 400, 500]



function printObject (anyObject, anyArray){
    return `My name is ${anyObject.name} and age is ${anyObject.age}, while my expencesnes are ${anyArray[2]}`
}

console.log(printObject(myInfo, myArray));


