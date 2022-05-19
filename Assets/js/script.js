// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  

let pass_length = prompt ("Select a length for your password between 8-128", "8");

  if (isNaN( pass_length) == false) {
    pass_length = parseInt(pass_length);
    if (pass_length >= 129 || pass_length <=7) {
      alert ("Invalid entry. Enter any number between 8-128");
      return;
    }
    
  } else {
    alert ("Invalid entry. Enter any number between 8-128");
    return;
  }

let yes_uppercase = confirm ("Would you like it to include uppercase letters?");
let yes_lowercase = confirm ("Would you like it to include lowercase letters?");
let yes_numeric = confirm ("Would you like it to include numbers?");
let yes_special = confirm ("Would you like it to include special characters?");

if (yes_uppercase == false && yes_lowercase == false && yes_numeric == false && yes_special == false) {
  alert ("Please select at least one criteria to continue.");
  return;
}  

  let password = generatePassword(pass_length, yes_uppercase, yes_lowercase, yes_numeric, yes_special);
  let passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword(pass_length, yes_uppercase, yes_lowercase, yes_numeric, yes_special) {
  let password = '';

  let pass_characters = [];
  if(yes_uppercase) {
    pass_characters.push('yes_uppercase');
  }
  if(yes_lowercase) {
    pass_characters.push('yes_lowercase');
  }
  if(yes_numeric) {
    pass_characters.push('yes_numeric');
  }
  if(yes_special) {
    pass_characters.push('yes_special');
  }

  for(var i=1; i<=pass_length; i++) {

    let letter_type_num = getRandomInt (pass_characters.length);
    switch( pass_characters[letter_type_num] ) {
      case 'yes_uppercase':
        password = password + getUppercase();
        break;
      case 'yes_lowercase':
        password = password + getLowercase();
        break;
      case 'yes_numeric':
        password = password + getNumber();
        break;
      case 'yes_special':
        password = password + getSpecial();
        break;
    }
  }
  return password;
}

function getUppercase () {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ltr_num = getRandomInt (upperCase.length);
  let letter = upperCase.substring(ltr_num,ltr_num+1);
  return letter;
}

function getLowercase () {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let ltr_num = getRandomInt (lowerCase.length);
  let letter = lowerCase.substring(ltr_num,ltr_num+1);
  return letter;
}

function getNumber () {
  let numeric = "0123456789";
  let ltr_num = getRandomInt (numeric.length);
  let letter = numeric.substring(ltr_num,ltr_num+1);
  return letter;
}

function getSpecial () {
  let special = "!#$%&()*+,-.:;<=>?@[_`{|}~";
  let ltr_num = getRandomInt (special.length);
  let letter = special.substring(ltr_num,ltr_num+1);
  return letter;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
