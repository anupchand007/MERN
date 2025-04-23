// fetch() provides us a promise that is either resolved or rejected
// syntax: fetch('  "your URL"  ')
// fetch()	Makes the HTTP request
// 1st .then()	Converts raw response to JSON
// 2nd .then()	Uses the actual parsed JSON data

fetch("https://api.github.com/users/anupchand007")
.then((response)=>{
    // console.log(response.json());
    return response.json();
})
.then((data) => {
    console.log(data) 
})
.catch((e) => console.log("error occured" + e)
)
