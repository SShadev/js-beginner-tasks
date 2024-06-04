// Declaring the variables
const kelvin = 0;
const celsius =  kelvin - 273;

// Declaring the fahrenheit variable
let fahrenheit = celsius * (9/5) + 32;

// Approx. F to a round whole number
fahrenheit = Math.floor(fahrenheit);

// Output
console.log(`The temperature is ${fahrenheit} degrees F`);