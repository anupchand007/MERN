let fullName = "Anup"
let u2 ="Bimal" 
let u3 = "sumit"

console.log(`${fullName} ${u2}`);


let trimData = "          Anup Chand      "
console.log(trimData);

console.log(trimData.trim());


const url = "https://anup%20Chand"
console.log(url.replace('%20', '-'))
console.log(url.includes('Chand'))
console.log(url.split(0, 4))       //split from  0 in the url expected output is https://anup%2 Chand


