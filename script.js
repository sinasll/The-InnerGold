const form = document.getElementById('codeForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop the real submit

  const codeValue = document.getElementById('codeInput').value.trim();

  const usersByCode = {
    '044044': { accountName: 'sin',      code: 'sina00' },
    'RycNO':  { accountName: 'das',   code: 'das444'  },
    'jAJXB':  { accountName: 'xafar',   code: 'xaf444'  },
    'hinJs':  { accountName: 'UN',      code: 'TIG444'  },
    '1213':   { accountName: 'UN',     code: 'TIG$!2'   },
    'jxrCl':  { accountName: 'UN',      code: 'TIGs!n'  } // if you actually meant this as a “code”
  };

  const user = usersByCode[codeValue];

  if (user) {
    alert(`Code accepted! You are, ${user.accountName}.`);
    window.location.href = `https://example.com/?user=${encodeURIComponent(user.accountName)}`;
  } else {
    alert('Code rejected');
  }
});