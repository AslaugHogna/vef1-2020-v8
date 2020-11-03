/**
 * Verkefni 8 – Caesar dulmál með vefviðmóti
 *
 * Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
 * Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
 */


/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n, alphabet = '') {
  console.log(str);
  console.log(n);
  console.log(alphabet);
  let STR = str.toLocaleUpperCase();
  let str_coded ="";

  for (let i = 0; i < STR.length; i++) {
    let ind = alphabet.indexOf(STR[i]);
    let newind;
    
    if (ind + n < alphabet.length) {
      newind = ind + n; 
    } else {
      newind = ind + n - alphabet.length; 
    }
    str_coded += alphabet[newind];
  }
  return str_coded;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n, alphabet = '') {

  let str_decoded ="";

  for (let i = 0; i < str.length; i++) {
    let ind = alphabet.indexOf(str[i]);
    let newind;

    if (ind - n < 0) {
      newind = ind - n + alphabet.length; 
    } else {
      newind = ind - n; 
    }
    str_decoded += (alphabet[newind]);  
  }
  return str_decoded;
}


const Caesar = (() => {
  // Default stafróf, uppfært þegar slegið inn í "alphabet"
  let alphabet = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';

  // Default type, uppfært af radio input
  let type = 'encode';

  // Default hliðrun, uppfært af "shift"
  let shift = 3;

  let strengur = '';

    
  function init(el) {
    // Setja event handlera á viðeigandi element (el)
    
    const shiftBy = document.querySelector('#shift');
    shiftBy.addEventListener('change', shiftn);

    const radios = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', radioChanged);
    } 
    
    const input = document.querySelector('input[name=input]');
    input.addEventListener('input', textinput);

    const alphinput = document.querySelector('#alphabet');
    alphinput.addEventListener('input', alphab);
 
  }
      
  function radioChanged(e) {
    console.log(`Radio value = ${e.target.value}`);
    type = e.target.value;
    console.log(type);
  }

  function textinput() {
      strengur = input.value;
      console.log(strengur + 123);
  }

  function alphab() {
    alphabet = input.value;
    
  }

  function shiftn() {

  }

  const result = document.querySelector('.result');
  if (type = 'encode') {
    result.textContent = encode(strengur, shift, alphabet) + "E";
  } else if (type = 'decode') {
    result.textContent = decode(strengur, shift, alphabet) + "D";
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const ceasarForm = document.querySelector('.ceasar');

  Caesar.init(ceasarForm);
});
