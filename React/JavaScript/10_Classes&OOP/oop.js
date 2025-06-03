const user = {
    username: "Anup Chand",
    age: 22,
    loginCount: 8,
    signedIn: true,

    getDetails: function () {
        // console.log("Got the user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getDetails())
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.greetuing = function(){
        console.log(`Welcome ${this.username
        }`);

    }
    return this
}

const userOne = User("Anup Chand", 12, true)
const userTwo = User("Chai", 12, false)
console.log(userOne);

const userThree = new User("Aarav", 21, false)
console.log(userThree);
