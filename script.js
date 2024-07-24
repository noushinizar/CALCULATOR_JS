let dvalue = "";
let n1 = "";
let operator = "";
let n2 = "";

function getvalue(value) {
  dvalue += value;
  document.getElementById("screen").value = dvalue;
}

function getoperator(op) {
  n1 = dvalue;
  operator = op;
  dvalue = "";
}

function calculate() {
  n2 = dvalue;
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(n1) + Number(n2);
      break;
    case '-':
      result = Number(n1) - Number(n2);
      break;
    case '*':
      result = Number(n1) * Number(n2);
      break;
    case '/':
      result = Number(n1) / Number(n2);
      break;
    case '%':
      result = Number(n1) % Number(n2);
      break;
    case 'sin':
      result = Math.sin(n1).toFixed(4);
      break;
    case 'cos':
      result = Math.cos(n1).toFixed(4);
      break;
    case 'tan':
      result =Math.tan(n1).toFixed(4);
      break;
  }
  dvalue = result.toString();
  document.getElementById("screen").value = dvalue;
  n1 = "";
  operator = "";
  n2 = "";
}

function clearScreen() {
   dvalue = "";
   n1 = "";
   operator = "";
   n2 = "";
   document.getElementById("screen").value = "";
 }
