document.getElementsByTagName("input").style.color = "red";

function Validator(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let err = document.getElementById("err");
    err.style.fontSize = "larger";
    

    err.innerText = "";

    if (name === "" || age === "" || address === ""){
        err.innerHTML = "Please fill all the Fields";
        return false;
    }

    if(name.length < 3){
        err.innerText = "Name is too short";
        return false;
    }
    if(age < 18){
        err.innerText = "User must be 18 years old";
        return false;
    }
    return true;
    
}
