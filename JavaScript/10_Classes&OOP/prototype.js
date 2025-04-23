let myName = "Anup Chand      ";

// console.log(myName.trueLength);

let myHeros = ["Superman", "Ironman"]


let heroPower = {
    Superman : "Lazer",
    Ironman : "Tech",

    getIronmanPower: function(){
        console.log(`The Power of Ironman is ${this.Ironman}`);
    }
}

Object.prototype.anupchand = function(){
    console.log("Anup is available in all objects");   
}

// heroPower.anupchand()

// myHeros.anupchand()

Array.prototype.heyAnup = function(){
    console.log(`Hey Anup`);
}


// myHeros.heyAnup()
// heroPower.heyAnup() //since we have only give the function to Array we will get error in object

//INHERITANCE

const Teacher = {
    makevideo : true
}

const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : false,
    __proto__: TeacherSupport           //old time inheritance method
}

//modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)  


let anotherUSername = "Anup Chand     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);

}

anotherUSername.trueLength();
"Yellow dello pello".trueLength();
"Yelello".trueLength();