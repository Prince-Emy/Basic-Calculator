function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;
  
    switch(operator) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Cannot divide by zero';
        }
        break;
      default:
        result = 'Invalid operator';
    }
  
    document.getElementById('result').innerText = 'Result: ' + result;
  }
  
  function validateInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
  }
  
  function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = 'Result: ';
  }
  
  // Keyboard support
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Escape'];
    if (!allowedKeys.includes(key)) {
      return; // Ignore keys that are not allowed
    }
  
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearCalculator();
    } else {
      const activeElement = document.activeElement;
      if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'SELECT') {
        activeElement.value += key;
      }
    }
  });
  