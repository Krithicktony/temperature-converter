var num = document.getElementById("num");
var fahrenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");
var result = document.getElementById("result");

function convert() {
    event.preventDefault(); 

    let temp;
    if (fahrenheit.checked) {
        temp = Number(num.value);
        temp = (temp * 9 / 5) + 32; 
        result.textContent = temp + " °F";
    } else if (celsius.checked) {
        temp = Number(num.value);
        temp = (temp - 32) * 5 / 9; 
        result.textContent = temp + " °C";
    } else {
        result.textContent = "Select the unit";
    }
}


