class Animal {
    setData(name, type) {
        this.a = name;
        this.b = type;
    }

    showData() {
        console.log(`The Animal name is ${this.a}, while it is a ${this.b} type of animal`);
    }
}

let cat = new Animal();                         //creating a new object from the parent class
cat.setData("Bubbly", "Gharelu");
cat.showData();

let tiger = new Animal();                       //creating a new object called tiger
tiger.setData("Jumbo", "Wild");
tiger.showData();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`This is my name ${this.name}`);
    }

    
}

let anup = new Person("Anup", 22);
anup.greet();

//Inheritance

class Anup extends Person {
    greeter() {
        console.log("This is a greet msg form Anup class which inherits properties from Class Person");
    }
}

let p1 = new Anup("Anurag", 22);
p1.greet();                         // anup does not have greet() method but it inherits from class person
p1.greeter();          

