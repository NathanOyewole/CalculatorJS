class Calculator {
    constructor() {
      this.displayValue = '0';
      this.firstOperand = null;
      this.waitingForSecondOperand = false;
      this.operator = null;
      this.memory = 0;
    }
  
    inputDigit(digit) {
      if (this.waitingForSecondOperand) {
        this.displayValue = digit;
        this.waitingForSecondOperand = false;
      } else {
        this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
      }
    }
  
    inputDecimal() {
      if (this.waitingForSecondOperand) {
        this.displayValue = '0.';
        this.waitingForSecondOperand = false;
      } else if (!this.displayValue.includes('.')) {
        this.displayValue += '.';
      }
    }
  
    handleOperator(nextOperator) {
      const inputValue = parseFloat(this.displayValue);
  
      if (this.operator && this.waitingForSecondOperand) {
        this.operator = nextOperator;
        return;
      }
  
      if (this.firstOperand == null && !isNaN(inputValue)) {
        this.firstOperand = inputValue;
      } else if (this.operator) {
        const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
        this.displayValue = String(result);
        this.firstOperand = result;
      }
  
      this.operator = nextOperator;
      this.waitingForSecondOperand = true;
    }
  
    performCalculation(operator, first, second) {
      switch (operator) {
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return second === 0 ? 'Error' : first / second;
        case '^': return Math.pow(first, second);
        default: return second;
      }
    }
  
    reset() {
      this.displayValue = '0';
      this.firstOperand = null;
      this.waitingForSecondOperand = false;
      this.operator = null;
    }
  
    toggleSign() {
      if (this.displayValue !== '0') {
        this.displayValue = String(parseFloat(this.displayValue) * -1);
      }
    }
  
    inputPercent() {
      this.displayValue = String(parseFloat(this.displayValue) / 100);
    }
  
    inputSqrt() {
      const value = parseFloat(this.displayValue);
      this.displayValue = value < 0 ? 'Error' : String(Math.sqrt(value));
    }
  
    inputPower() {
      if (!this.waitingForSecondOperand) {
        this.firstOperand = parseFloat(this.displayValue);
        this.operator = '^';
        this.waitingForSecondOperand = true;
      }
    }
  
    memoryAdd() {
      this.memory += parseFloat(this.displayValue);
    }
  
    memorySubtract() {
      this.memory -= parseFloat(this.displayValue);
    }
  
    memoryRecall() {
      this.displayValue = String(this.memory);
    }
  
    memoryClear() {
      this.memory = 0;
    }
  
    getDisplay() {
      return this.displayValue;
    }
  }
  
  // Exporting instance for UI hook-in
  const calculator = new Calculator();
  