const userEmail = "a@.ai"

if(userEmail){
    console.log(`User email is ${userEmail}`); 
}else{
    console.log("User dont have email");   
}


// falsy Values
// False, 0, BigInt, "", null, undefined, NaN

// truthy values
// [], true, "0", "false", " ", {}, function() {}

// Nullish Coalescing Operator (??) : null undefiend

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
// console.log(val1);


// Terninary Operator

// condition ? tryue : false

const mouse = 5799;
mouse >= 5000 ? console.log("Damn expesinve") : console.log("Cheap");


