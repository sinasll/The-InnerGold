document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Define the valid codes directly in the script
  const validCodes = ['DASF4X', 'XAF044', '044044', 'SINA00', 'ES1998', '040404'];
  
  const enteredCode = document.getElementById('confirmationCode').value.toUpperCase();
  
  if (validCodes.includes(enteredCode)) {
    alert('Code accepted! You are one of us.');
    window.location.href = 'main.html';  
  } else {
    alert('Invalid code! You are not one of us.');
  }
});
