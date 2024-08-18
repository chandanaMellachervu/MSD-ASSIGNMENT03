

function performCalculation() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultElement = document.getElementById('calc-result');

  let result;

  switch (operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          if (num2 !== 0) {
              result = num1 / num2;
          } else {
              resultElement.textContent = 'Error: Division by zero';
              return;
          }
          break;
      default:
          resultElement.textContent = 'Error: Invalid operator';
          return;
  }

  resultElement.textContent = `Result: ${result}`;
}


function calculateSum() {
  const arrayInput = document.getElementById('array-input').value;
  const array = arrayInput.split(',').map(num => parseFloat(num.trim()));
  const resultElement = document.getElementById('array-result');

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
          sum += array[i];
      }
  }

  resultElement.textContent = `Sum of even numbers: ${sum}`;
}


const Person = {
  firstName: 'chandana',
  lastName: 'Mellachervu',
  age: 30,

  getFullName() {
      return `${this.firstName} ${this.lastName}`;
  },

  incrementAge() {
      this.age++;
  }
};

function displayPersonInfo() {
  const personInfoElement = document.getElementById('person-info');
  personInfoElement.textContent = `Name: ${Person.getFullName()}, Age: ${Person.age}`;
}

function incrementAge() {
  Person.incrementAge();
  displayPersonInfo();
}


displayPersonInfo();
