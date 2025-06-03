const promise1 = new Promise(function (resolve, reject) {
    // Does an async task
    // DB calls, network 
    setTimeout(() => {
        console.log("Async task is compelete");
        resolve()

    }, 1000)
});

promise1.then(() => {
    console.log("Promised Consumed");
    console.log

});

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Part 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 is also complete");
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Anup Chand",
            email: "Anup@gmail.com"
        })
    })
})

promise3.then(function (user) { //the fucntion user takes the value of the resolve
    console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: "Anup Chand",
                email: "Anup@gmail.com"
            })
        } else {
            reject("Error Occured")
        }
    })
}, 1000)

promise4
    .then((user) => {
        console.log(user);
        return user.username

    })
    .then((username) => {
        console.log(username);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => console.log("The promise is done executed"))

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
                username: "JavaScript",
                password: "Anup@gmail.com"
            })
        } else {
            reject("Error JS Occured")
        }
    }
    ), 1000
})

// promise5.then(()=>{

// })

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (e) {
        console.log("Error Occured");

    }
}
// consumePromise5()

async function gitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/anupchand007')
        console.log(response);
        
        let data = await response.json()
        console.log(data);
    }
    catch (e) {
        console.log("Error OCcured");
    }
}
// gitHubData()


// fetch() :- since fetch provide a promise we can do

fetch("https://api.github.com/users/anupchand007")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error) => console.log("Errror Occured" + error))