const desc = Object.getOwnPropertyDescriptor(Math, "PI")


// console.log(desc);


// const PI = Math.PI;
// console.log(PI);


const MyName = {
    name : "Anup Chand",
    age : 22
}

console.log(Object.getOwnPropertyDescriptor(MyName, "age"));

Object.defineProperty(MyName, 'age', {      //this will disable the loop in the MyName object Age property
    writable: false, 
    enumerable: false, 
    configurable: true
})

for (let [key, value] of Object.entries(MyName)) {
    console.log(`${key} : ${value}`);
    
}