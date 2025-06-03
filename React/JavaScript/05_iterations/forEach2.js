const coding  = ["js", "java", "php", "ruby"]

const value = coding.forEach( (items) => {
    // console.log(items);
    return items;
} )

// console.log(value);


const myNUms = [1,2,3,4,5,6,7,8]

const newNumbs = myNUms.filter((num) => num > 5)
const newNumbs1 = myNUms.filter((num) => {
    return num > 5
})
// console.log(newNumbs);
// console.log(newNumbs1);

const newNumbs3 = []

myNUms.forEach( (num ) => {
    if (num > 3)
    {
        newNumbs3.push(num)
    }
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



const userGeneric = books.filter((book) => book.genre === "History") ;
// console.log(userGeneric);

const userBook = books.filter( (book) => {
    return book.publish >= 1990 && book.edition > 1999
});
console.log(userBook);
