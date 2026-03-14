let expression = "";

function press(value) {
  expression += value;
  document.getElementById("process").innerText = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("result").innerText = result;
  } catch {
    document.getElementById("result").innerText = "Error";
  }
}

function clearAll() {
  expression = "";
  document.getElementById("process").innerText = "";
  document.getElementById("result").innerText = "0";
}
  if (expression.includes("/0")){
    throw "Divide by zero";
  }
