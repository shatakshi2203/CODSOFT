// script.js

function clearScreen() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.substring(0, result.length - 1);
}

function appendValue(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
      let result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
  } catch (e) {
      document.getElementById("result").value = "Error";
  }
}
