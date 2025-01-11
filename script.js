document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Define the valid codes directly in the script
  const validCodes = ['DASF4X', 'XAFAR4', 'SINA00', 'ESAM98', 'SINA44'];
  
  const enteredCode = document.getElementById('confirmationCode').value.toUpperCase();
  
  if (validCodes.includes(enteredCode)) {
    alert('Code accepted! You are one of us.');
    window.location.href = 'main.html';  
  } else {
    alert('Invalid code! You are not one of us.');
  }
});
