//Synchronous = Executes line by line consecutively in a squentinal manner
//                Code that waits for an opertaion to be completed

//Asynchtonous = Allows multiple operations to be performed concurrently without waiting
//               Doesn't block the execution flow and allows the program to continue
//               (I/O operations, network request, fetching data)
//                Handled with: Callbacks, Promises, Async/Await


// setTimeout is a async function which make a task to be exectued after creatin time

// setTimeout(() => console.log("Task 1: This will finish at last"), 3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

//we can use callback, eg:

function fun1(callback){
    setTimeout(() => {console.log("Task 1: This will finish at First");
                        callback()}, 3000)
}

function fun2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

fun1(fun2);         //note that fun2 should only be set as arg not fun2();