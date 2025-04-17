const coding  = ["js", "java", "php", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( ( item ) => {
//     console.log(item);
    
// } )


function printMe(item){
    console.log(item);
    
}

// coding.forEach(printMe)

coding.forEach( (item, index, coding) => {
    // console.log(item, index, coding);
})

const myCoding = [
    {
        langaugeName : "JavaScripts",
        langaugeFileName : "js"
    },  
    {
        langaugeName : "Scripts",
        langaugeFileName : "js"
    },
    {
        langaugeName : "Java",
        langaugeFileName : "js"
    }
]

myCoding.forEach((item) => {
    console.log(item.langaugeFileName);
    
})