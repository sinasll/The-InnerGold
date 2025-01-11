import validCodes from 'config.js';

document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const enteredCode = document.getElementById('confirmationCode').value.toUpperCase();
  if (validCodes.includes(enteredCode)) {
    alert('Code accepted! You are one of us.');
    window.location.href = 'main.html';  
  } else {
    alert('Invalid code! You are not one of us.');
  }
});
