function cToF(num1) {

  let tempF = (num1 * 9) / 5 + 32;
  window.alert("Your temperature in fahrenheit is: " + tempF);
}

function fToC(num2) {
  let tempF = (num2 - 32) * 5 / 9;
  window.alert("Your temperature in celsius is: " + tempF);
}

function whereToGo() {
  if (ques === 1) {
    let num1 = window.prompt("Enter degrees celsuis here:");
    cToF(num1);
  }
  else {
    let num2 = window.prompt("Enter degrees fahrenheit here:");
    fToC(num2);
  }
}


const ques = window.prompt("enter 1 for C to F, enter 2 F to C");
whereToGo();
