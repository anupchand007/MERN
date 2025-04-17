const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.map((i) => i+10 );


const newNums = myNum.map((i) => i*10).map((i) => i + 10).filter( (i) => i >= 40)

console.log(newNums);

