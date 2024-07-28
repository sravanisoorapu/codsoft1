function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    let current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
  }
  
  function appendToDisplay(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    let expression = document.getElementById('result').value;
    try {
      document.getElementById('result').value = eval(expression);
    } catch {
      document.getElementById('result').value = 'Error';
    }
  }
  