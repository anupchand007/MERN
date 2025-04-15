const mySym =  Symbol("key1") //

let myInfo ={
    "full name" : "Anup Chand",
    age : 22,
    [mySym]: "myKey1",      //square bracket represents symbols otherwise simple string
    address : "KTM",
    isLoggedIn : false,
    
}

// console.log(myInfo.isLoggedIn);
// console.log(myInfo["full name"]);
// console.log(myInfo["name"]);
// console.log(myInfo[mySym]);     //using symbol type


myInfo["full name"] = "ChatGPT"
// console.log(myInfo);


// Object.freeze(myInfo); //Changes are not implemented


myInfo.greeting = function(){
    console.log("Hello Worlds!");
    
}

myInfo.greeting2= function(){
    console.log(`Hello World, ${this.address}`);
    
}
// console.log(myInfo.greeting());
// console.log(myInfo.greeting2());


// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = 1121
tinderUser.name = "Anup Chand"

const regularUser ={
    email : "anupchand258@gmail.com",
    fullname: {
        firstName: "Anup",
        lastName: "Chand"
    }
}
// console.log(tinderUser);

// console.log(tinderUser);
// console.log(regularUser.fullname.firstName);

const obj1 = {
    id1 : 1,
    id2: 69
}
const obj2 = {
    id2 : 2,
    id3 : 55
}

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        name: "Anup Chand",
        email : "anupchand258@gmail.com"
    }
]

// console.log(users);

// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));
// console.log(Object.entries(myInfo));


//Destructring 
const Course = {
    name : "JAVAScript",
    price : 999,
    teacher : "hitesh"
}

//Destructuring object

const {teacher} = Course;
console.log(teacher);


const Person = {
    name : "Anup Chand",
    age : 22,
    address  : "KTM",
    dob  : "2059/09/26"
}

const {dob :  BirthYear} =  Person
console.log(BirthYear);
