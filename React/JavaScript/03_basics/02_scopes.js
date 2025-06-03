// Block Scope
// Global Scope

var Age = 35

if (true) {
    let name = "Anup Chand"
    const Pi = 3.14
    var Age = 22
}

// console.log(name);
// console.log(Pi);
console.log(Age);

function name() {
    const name = "Anup"

    function first() {
        const age = 22;
        console.log(name);
    }
    // console.log(age);
    first();
    
}

console.log(addOne(5))

function addOne(num){
    return num + 1
}


// console.log(addTwo(5))

const addTwo  = function(num){
    return num + 2
}

console.log(addTwo(5))