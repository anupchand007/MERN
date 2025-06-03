class User{
    constructor(username){
        this.username = username
    }

    showME(){
        console.log(`This is me ${this.username}`);
        
    }

    static createID(){                  //the static keyword prevent child to inherties the method
        return 123;
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
    
    age(){
        console.log(`I'm 22 years old`);
    }
}

const Bimal = new Teacher("Bimal Paudel", "B@g.com");
Bimal.age();
Bimal.showME();
// Bimal.createID();