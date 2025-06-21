const form = document.getElementById('codeForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const codeValue = document.getElementById('confirmationCode').value.trim();
  const usersByCode = {
    'sina00': { accountName: 'sin',   code: 'sina00' },
    'das444':  { accountName: 'das',   code: 'das444' },
    'xafar4':  { accountName: 'xafar', code: 'xaf444' },
    'tig000':  { accountName: 'UN',    code: 'TIG444' },
    'tig444':   { accountName: 'UN',    code: 'TIG$!2' },
    'tigtig':  { accountName: 'UN',    code: 'TIGs!n' }
  };
  if (usersByCode[codeValue]) {
    alert('Code accepted! You’re one of us.');
    window.location.href = 'main.html';
  } else {
    alert('Code rejected! You’re not one of us.');
  }
});