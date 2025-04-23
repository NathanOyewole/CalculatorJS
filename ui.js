const display = document.getElementById("display");
const keys = document.querySelector(".keys");

keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) return;

  const action = target.dataset.action;
  const buttonContent = target.textContent;

  if (!action) {
    calculator.inputDigit(buttonContent);
  } else {
    switch (action) {
      case "decimal":
        calculator.inputDecimal();
        break;
      case "clear":
        calculator.reset();
        break;
      case "sign":
        calculator.toggleSign();
        break;
      case "percent":
        calculator.inputPercent();
        break;
      case "sqrt":
        calculator.inputSqrt();
        break;
      case "power":
        calculator.inputPower();
        break;
      case "add":
        calculator.handleOperator("+");
        break;
      case "subtract":
        calculator.handleOperator("-");
        break;
      case "multiply":
        calculator.handleOperator("*");
        break;
      case "divide":
        calculator.handleOperator("/");
        break;
      case "equals":
        calculator.handleOperator("=");
        break;
      case "memory-add":
        calculator.memoryAdd();
        break;
      case "memory-subtract":
        calculator.memorySubtract();
        break;
      case "memory-recall":
        calculator.memoryRecall();
        break;
      case "memory-clear":
        calculator.memoryClear();
        break;
    }
  }

  display.textContent = calculator.getDisplay();
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key)) {
    calculator.inputDigit(key);
  } else if (key === ".") {
    calculator.inputDecimal();
  } else if (["+", "-", "*", "/"].includes(key)) {
    calculator.handleOperator(key);
  } else if (key === "Enter" || key === "=") {
    calculator.handleOperator("=");
  } else if (key === "Escape") {
    calculator.reset();
  } else if (key === "%") {
    calculator.inputPercent();
  } else if (key.toLowerCase() === "s") {
    calculator.inputSqrt();
  } else if (key === "^") {
    calculator.inputPower();
  } else if (key.toLowerCase() === "m") {
    calculator.memoryRecall();
  }

  display.textContent = calculator.getDisplay();
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
