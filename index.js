//The function of addition
function addition() {
  var num1 = Number(document.getElementById("inputfield1").value);
  var num2 = Number(document.getElementById("inputfield2").value);

  var result = num1 + num2;

  document.getElementById("result").innerHTML = "Result :" + result;
}

// The function of subtraction
function subtraction() {
  var num1 = Number(document.getElementById("inputfield1").value);
  var num2 = Number(document.getElementById("inputfield2").value);

  var result = num1 - num2;

  document.getElementById("result").innerHTML = "Result :" + result;
}

//The function of multiplication
function multiplication() {
  var num1 = Number(document.getElementById("inputfield1").value);
  var num2 = Number(document.getElementById("inputfield2").value);

  var result = num1 * num2;

  document.getElementById("result").innerHTML = "Result :" + result;
}

//The function of division
function division() {
  var num1 = Number(document.getElementById("inputfield1").value);
  var num2 = Number(document.getElementById("inputfield2").value);

  var result = num1 / num2;

  document.getElementById("result").innerHTML = "Result :" + result.toFixed(3);
}
