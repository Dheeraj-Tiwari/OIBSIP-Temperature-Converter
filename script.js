function convertTemperature() { 
    var opt = document.querySelector("#unit"); // Get the selected unit from the dropdown
    var display = document.querySelector(".value");  // Get the result display element
    var inputValue = document.querySelector(".ab").value; // Get the input value

    if (opt.value === "Celsius") {
        // Convert Celsius to Fahrenheit and Kelvin
        var fahrenheit = (inputValue * (9 / 5)) + 32;
        var kelvin = parseInt(inputValue) + 273.15;
        display.innerHTML = inputValue + " °C = " + fahrenheit.toFixed(2) + " °F | " + kelvin.toFixed(2) + " K";
    } else if (opt.value === "Fahrenheit") {
         // Convert Fahrenheit to Celsius and Kelvin
        var celsius = (inputValue - 32) * (5 / 9);
        var kelvin = (inputValue - 32) * (5 / 9) + 273.15;
        display.innerHTML = inputValue + " °F = " + celsius.toFixed(2) + " °C | " + kelvin.toFixed(2) + " K";
    } else if (opt.value === "Kelvin") {
        // Convert Kelvin to Celsius and Fahrenheit
        var celsius = inputValue - 273.15;
        var fahrenheit = (inputValue - 273.15) * (9 / 5) + 32;
        display.innerHTML = inputValue + " K = " + celsius.toFixed(2) + " °C | " + fahrenheit.toFixed(2) + " °F";
    }
}
