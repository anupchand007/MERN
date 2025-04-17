const muNums = [1,2,3,4]

// const initialValue = 0;
const total = muNums.reduce((acc, curval) => {
    console.log(`Acc: ${acc} and CurValue ${curval}`);
    
    return acc  + curval
}, 0)

console.log(total);

const MyTotal = muNums.reduce((acc, curr) => acc + curr, 0)
// console.log(MyTotal);

const myCourse = [
    {
        itemname : "py course",
        price: 999
    },
    {
        itemname : "js course",
        price: 9299
    },
    {
        itemname : "c course",
        price: 9919
    },
    {
        itemname : "c++ course",
        price: 9929
    },
    {
        itemname : "pyc# course",
        price: 1999
    },
    {
        itemname : "java course",
        price: 2999
    }
]

const price = myCourse.reduce((acc, item) => acc + item.price, 0)
console.log(price);


