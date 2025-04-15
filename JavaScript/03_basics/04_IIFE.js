// Immediately Invoked Function Expressions (IIFE)

(function DataBase() {
    //named IIFE
    console.log("Database conencted");   
}) ();                                          
// we will get an error if we use parenthesis this ways so to solve it 
// we have to put the entire function in parentheis ending with semicolor ;


(() => {}) ();
// (() => {}) arrow function or normal function and the exetcution of that fucntion ()



((name) => {
    
    console.log(`Database conencted 2 ${name}`);   
})("Anup Chand");