let myname = ["Anup Chand", "Chand"]

for(let i = 0; i < myname.length; i++){

    console.log(myname[i])
}

for(let i = 0; i <= 10; i++){
    if( i == 5){
        console.log("5  is best number");
    }
    console.log(i)
}


for (let i = 0; i <= 10; i++) {
    console.log(`outer Loop ${i}`);
    
    for(let j = 0; j <= 10; j++)
    {
        // console.log(`Inner Loop ${j} n ${i}`);
        
    }
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(index);
        break;
    }
    console.log("Deceted: "+index);

}
 
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(index);
        continue;
    }
    console.log("Deceted: "+index);

}

// while
let  ay = 1
while (ay <= 20){
    console.log(`Hello World ${ay}`);
    ay++
}

// do while
index =11;
do{
    console.log("Heheheh"+ index);
    index++
}while(index <= 10);