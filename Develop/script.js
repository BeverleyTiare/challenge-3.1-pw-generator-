
//From Stack Overfflow: Random Num.Generator
//https://stackoverflow.com/questions/18230217/javascript-generate-a-random-number-within-a-range-using-crypto-getrandomvalues

function getRandomIntInclusive(min, max) {
  const randomBuffer = new Uint32Array(1);

  window.crypto.getRandomValues(randomBuffer);

  let randomNumber = randomBuffer[0] / (0xffffffff + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}

function createPassword(){
  //Selecting input elements for user selection
  var lengthInput = document.querySelector("#length");
  var lowercaseInput = document.querySelector("#lowercase");
  var uppercaseInput = document.querySelector("#uppercase");
  var numbersInput = document.querySelector("#numbers");
  var symbolsInput = document.querySelector("#symbols");

//User error if no selection
  if (!lowercaseInput.checked && !uppercaseInput.checked && !numbersInput.checked && !symbolsInput.checked){
    alert ('you must select at least one character type')
    return;
  }

//Defined strings for random selection
  const lowercaseChars ='abcdefghijklmnopqrstuvwxyz'
  const uppercaseChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbersChars ='0123456789'
  const symbolsChars ='!@#$%^&*()?+{}'
  const chars = [];

//Add characters to a selection within an array
  if (lowercaseInput.checked) {
    chars.push(lowercaseChars)
  } 
  if (uppercaseInput.checked) {
    chars.push(uppercaseChars)
  } 
  if (numbersInput.checked) {
    chars.push(numbersChars)
  } 
  if (symbolsInput.checked) {
    chars.push(symbolsChars)
  } 

//Loop and amount of times set for length 
  let password = '';
  for(let i=0; i<lengthInput.value; i++){
    

    //Cycle thru each character type 
    const charsType = chars [i % chars.length];
    //Random number index obtained for character type
    const indexRandom = getRandomIntInclusive(0,charsType.length - 1);
    //append random character to pw
    password += charsType[indexRandom];
  }
  //Write pw to screen 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
