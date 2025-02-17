function val(op) {
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);

    let result = document.getElementById("disp");
    result.innerText = "";

    switch (op) {
        case '+':
            result.innerText = `Result is` + ( x + y );
            break;
        case '/':
            result.innerText = `Result is ${x / y}`;
            break;
        case '*':
            result.innerText = `Result is ${x * y}`;
            break;
        case '-':
            result.innerText = `Result is ${x - y}`;
            break;
        default:
            result.innerText = `Invalid Option`;
    }
}
