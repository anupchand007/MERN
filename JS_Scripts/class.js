class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`This is my name ${this.name}`);
    }
}

let anup = new Person("Anup", 22);
anup.greet();

class Animal{
    setData(name, type){
        this.a = name;
        this.b = type;
    }

    showData(){
        console.log(`The Animal name is ${this.a}, while it is a ${this.b} type of animal`);
    }
}

let cat = new Animal();
cat.setData("Bubbly", "Gharelu");
cat.showData();

let tiger = new Animal();
tiger.setData("Jumbo", "Wild");
tiger.showData();