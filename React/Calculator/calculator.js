let result = document.getElementById("display");
let eq = document.getElementsByClassName("equal");
function appendToDisplay(input) {
    result.value += input
}

function calculate() {
    try {
        if (result.value === "") {
            result.value = "No Data";
        }
        result.value = eval(result.value)       //js predefined fucntion
    } catch (e) {
        result.value = "Error";
        setTimeout(() => result.value = "", 3000)
    }
}
function clearDisplay() {
    result.value = ""
}