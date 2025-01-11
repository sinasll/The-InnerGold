document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Define the valid codes with associated account information
  const validCodes = {
    'DASF4X': { accountName: 'User1', accountId: '1234' },
    'XAF044': { accountName: 'User2', accountId: '5678' },
    '044044': { accountName: 'User3', accountId: '91011' },
    'SINA00': { accountName: 'User4', accountId: '1213' },
    'ES1998': { accountName: 'User5', accountId: '1415' },
    '040404': { accountName: 'User6', accountId: '1617' }
  };
  
  const enteredCode = document.getElementById('confirmationCode').value.toUpperCase();

  // Check if the entered code is valid
  if (validCodes[enteredCode]) {
    const user = validCodes[enteredCode];
    alert(`Code accepted! Welcome, ${user.accountName}.`);
    
    // Redirect to the main page with account info (optional)
    window.location.href = `main.html?accountId=${user.accountId}&accountName=${user.accountName}`;
  } else {
    alert('Invalid code! You are not one of us.');
  }
});