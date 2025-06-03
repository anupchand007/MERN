// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     toUpper(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const anup = new User("Anup Chand", "a@gmail.co", "123")
// console.log(anup.encryptPassword());
// console.log(anup.toUpper());


//behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.toUpper = function(){
    return `${this.username.toUpperCase()}`
}

const Admin = new User2("Admini", "A@f", "98700")

console.log(Admin.encryptPassword());
console.log(Admin.toUpper());

