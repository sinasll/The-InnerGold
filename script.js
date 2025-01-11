document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Define the valid codes with associated account information
  const validCodes = {
    'DASF4X': { accountName: 'DAS', accountId: '1234' },
    'XAF044': { accountName: 'XAF', accountId: '5678' },
    '044044': { accountName: 'UN', accountId: '91011' },
    'SINA00': { accountName: 'SINA', accountId: '1213' },
    'ES1998': { accountName: 'ES', accountId: '1415' },
    '040404': { accountName: 'UN', accountId: '1617' }
  };
  
  const enteredCode = document.getElementById('confirmationCode').value.toUpperCase();

  // Check if the entered code is valid
  if (validCodes[enteredCode]) {
    const user = validCodes[enteredCode];
    alert(`Code accepted! you are, ${user.accountName}.`);
    
    // Redirect to the main page with account info (optional)
    window.location.href = `main.html?accountId=${user.accountId}&accountName=${user.accountName}`;
  } else {
    alert('Invalid code! You are not one of us.');
  }
});