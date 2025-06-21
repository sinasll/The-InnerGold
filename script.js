const form = document.getElementById('codeForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const codeValue = document.getElementById('confirmationCode').value.trim();
  const usersByCode = {
    '044044': { accountName: 'sin',   code: 'sina00' },
    'RycNO':  { accountName: 'das',   code: 'das444' },
    'jAJXB':  { accountName: 'xafar', code: 'xaf444' },
    'hinJs':  { accountName: 'UN',    code: 'TIG444' },
    '1213':   { accountName: 'UN',    code: 'TIG$!2' },
    'jxrCl':  { accountName: 'UN',    code: 'TIGs!n' }
  };
  if (usersByCode[codeValue]) {
    alert('Code accepted! You’re one of us.');
    window.location.href = 'main.html';
  } else {
    alert('Code rejected! You’re not one of us.');
  }
});