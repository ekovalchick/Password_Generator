// Assignment Code
var generateBtn = document.querySelector("#generate");

// create variable to save special characters
// create variable to save numbers
// create variable for lowercase all letters from A thru Z
// create variable for uppercase all letters from A thru Z 

var upperCase = "ABCDEFGHIJKLMNOPQRSTURVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "%$@!*)(*!";
var number = "0123456789"

function generatePassword() {
  var savedPassword = ""
  var passwordSize = window.prompt("choose a password size between 8 and 128")


  if (passwordSize >= 8 && passwordSize <= 128) {
    var isSpecialCharacter = window.confirm("Do you want to include special character in your password")
    var isNumber = window.confirm("Do you want to include numbers in your password")
    var isLowerCase = window.confirm("Do you want to include lowercase in your password")
    var isUpperCase = window.confirm("Do you want to include  uppercase in your password")


    if (isSpecialCharacter === true) {
      var randomIndex = Math.floor(Math.random() * specialCharacter.length)
      savedPassword = savedPassword + specialCharacter[randomIndex]
    }

    if (isNumber=== true) {
      var randomIndex = Math.floor(Math.random() * number.length)
      savedPassword = savedPassword + number[randomIndex]
    }

    if (isLowerCase === true) {
      var randomIndex = Math.floor(Math.random() * lowerCase.length)
      savedPassword = savedPassword + lowerCase[randomIndex]
    }

    if (isUpperCase === true) {
      var randomIndex = Math.floor(Math.random() * upperCase.length)
      savedPassword = savedPassword + upperCase[randomIndex]
    }

    if(isSpecialCharacter==false && isNumber===false && isUpperCase===false&& isLowerCase===false){
      window.alert("You must pick one character type")
      return ""
    }

  } else {
    window.alert("Sorry, you are outside the password range")
  }


  return savedPassword

  // first prompt (window.prompt - user input) - ask user for the size of password between 8 and 128
  // - if the size is outside of 8 and 128, you alert user that says "invalid"

  // second prompt (window.confirm - boolean -true or false ) -  confirm special character

  // third prompt (window.confirm - boolean -true or false ) -  confirm numbers character

  // fourth prompt (window.confirm - boolean -true or false ) -  confirm lowercase character

  // fifth prompt (window.confirm - boolean -true or false ) -  confirm upper character



  // var userLength = window.prompt("Please provide the size of your password")

  // var isLowerCase=window.confirm("Include Lowercase")

  // window.alert("Invalid")

  // console.log(userLength)

  // console.log(isLowerCase)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // return the final password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
