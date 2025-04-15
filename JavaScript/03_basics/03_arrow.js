const User = {
    username: "Anup Chand",
    price: 99,

    welcome: function () {
        console.log(`${this.username} welcome to website`);
    }
}

User.username = "Aarav"
User.welcome();


const chai = () => {
    const type = "MIlk"

    function tea(){
        const suger =  "high";
        console.log(` I like ${type} tea with ${suger} suger`);
        
    }
    tea()
}
console.log(chai());


const printObj = () => ({username : "Anup chand"})
console.log(printObj());

