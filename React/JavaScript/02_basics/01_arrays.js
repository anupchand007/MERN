// let myArray = ["Anup" , 1 , true, 3.14]

// console.log(myArray[0]);
// console.log(myArray.length);

// console.log(myArray);

// console.log(myArray.push(22));

// console.log(myArray);

// console.log(myArray.pop());


// console.log(myArray.includes(3.14));
// console.log(myArray.toString());


let myA = [1,2,3,4,5,6]

let myB = myA.slice(1,3);
console.log("origin", myA);
console.log("Slice", myB);
console.log("origin", myA);
let myC = myA.splice(0,4);
console.log("Splice", myC);
console.log("origin", myA);


const marevel = ["sprider man", "ironman", "thor"]
const dc = ["batman", "superman", "flash"]

const allHeros = marevel.concat(dc);
console.log(allHeros);
const myName = "Anup Chand"

console.log(Array.isArray(allHeros))
console.log(Array.from(myName));


let s1 =100
let s2 =200
let s3 =300

//to combile number into Array

console.log(Array.of(s1, s2, s3));
