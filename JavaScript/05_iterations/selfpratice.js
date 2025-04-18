const myArray  = ["Anup", "Sumit", "Ananta", "Bimal"]

const userInfo = [
    {
        userID : 1,
        userName : "Anup Chand"
    },
    {
        userID : 2,
        userName : "Sumit Chau"
    },
    {
        userID : 3,
        userName : "Ananta Kadel"
    },
    {
        userID : 4,
        userName : "Bimal Paudel"
    },
]

const enrolledStudent = userInfo.reduce((acc, user) => acc + user.userName , "The name of Enrolled Student is ")
console.log(enrolledStudent);

const filterUser =  userInfo.map((i) => i.userID + 10)
// .map((i) => {    return `Welcome ${i.userID} Respected Sir`})
    // i.userName + "Respected Sir")
.filter((i) => i.userID <=12)

console.log(filterUser);


