// A object is a key value pair 

let MyObject = {
    "name" : "Anup Chand",
    "age" : 22,
    "address" : "Dhangadhi",

    Show(){
        console.log(`Hello my name is ${this.name}, while my age is ${this.age}`)
    }
}
MyObject.Show();
console.log(MyObject["age"]);
console.log(MyObject["address"]);

//Changing the value of the object key
MyObject["name"] = "Aarav";
MyObject.Show();
console.log(MyObject);