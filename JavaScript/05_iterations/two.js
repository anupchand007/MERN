// for of

const myArray = [1, 2, 3, 4, 5];


for (const i of myArray) {
    // console.log(i);
}

const greeting = "Hello!"

for (const greet of greeting) {
    // console.log("Each Chars are: "+greet);
}

// Maps :  Holds key value pairs

const map = new Map()
map.set("Name", "Anup Chand")
map.set("Age", "22")

// console.log(map);
// console.log(typeof map);



for (const [key, value ] of map) {
    // console.log(key, " : ", value);
    
}

const myGame = {
    game1: "Batman",
    game2: "Spiderman",
    game3: "IronMan",
}

// for (const [key, value] of myGame) {
//     console.log(key + " - "+ value);
// }

