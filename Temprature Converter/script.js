function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    // Get the input value and convert it to a number
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        // Calculate Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    } else {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
}
