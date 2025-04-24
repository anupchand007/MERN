class Person{
    constructor(email, password){
        this._email = email;            // _email represent private field or we can use the #email
        this._password = password
    }


    get email(){
        return `The name of the user is ${this._email.toUpperCase()}`
    }

    set email(value){
        this._email= value
    }
}

const Anup = new Person("An@gmail.com", "123sada")
console.log(Anup.email);
