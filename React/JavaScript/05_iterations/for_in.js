// for...in
//Loops over **enumerable properties (keys) of an object**.


const myObj = {
    langauge1 : "JS",
    langauge2 : "HTML",
    langauge3 : "CSS",
    langauge4 : "REACT",
}
    
for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`);
    
    // console.log(myObj[key]);
    
}

