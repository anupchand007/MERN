class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }


    addCourse(){
        console.log(`The Course was Added by ${this.username}`);
    }
}

const Sumit = new Teacher("Sumit", "S@gmail.com", 123);
Sumit.addCourse();

const MasalaChai = new User("Masala Chai");
MasalaChai.logMe();
// MasalaChai.addCourse()

console.log(MasalaChai instanceof User);
console.log(Sumit instanceof User);
console.log(MasalaChai instanceof Teacher);
