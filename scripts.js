// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C

function cToF(num1) {
  let tempF = (num1 * 9) / 5 + 32;
  window.alert("Your temperature in fahrenheit is: " + tempF);
}

// function fToC() {
// }

let num1 = window.prompt("Enter a number here:");
cToF(num1);
// fToC();
