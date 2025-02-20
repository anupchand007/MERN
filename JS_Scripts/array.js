let num = [1,2,3,4,5];

console.log(num);

console.log("The length of the string is "+num.length);
console.log("Adding values to num array");
num[5] = [21];
num[6] = [31];
num[7] = [41];
num[5] = [21];

console.log("Using for loop to print array value");

for(i =0;  i<num.length; i++){
    // console.log("The value is "+ num[i] );
}

//arrays methods 

let string_array = num.toString();
console.log(string_array, typeof(string_array));

let join_array = num.join(" and ");
let join_array1 = num.join("  ");
let join_array2 = num.join(" wee ");
// console.log(join_array);
// console.log(join_array1);
// console.log(join_array2);

//pop() this method print the last element of the array
console.log("Printing the last element of Array: "+num.pop())
