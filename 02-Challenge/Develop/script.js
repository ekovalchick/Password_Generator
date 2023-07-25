var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = upperCase.toLowerCase();
var specialCharacters = "!@#$%^&*{}/?"
var numbers = "0123456789"


function generatePassword() {
  var savePassword = "";
  var userLength = window.prompt("Choose password length between 8-128.");

  if (userLength >= 8 && userLength <= 128) {
    var isSpecialCharacter = window.confirm("Do you want to include special characters in your password?");
    var isLowerCase = window.confirm("Do you want to include lowercase characters in your password?");
    var isUpperCase = window.confirm("Do you want to include uppercase characters in your password?");
    var isNumbers = window.confirm("Do you want to include numbers in your password?");
    console.log(userLength);

    if (isSpecialCharacter === false && isLowerCase === false && isUpperCase === false && isNumbers === false) {
      alert("Must choose at least one character type.");
      return "";
    }

    // Calculate the remaining number of characters to add to reach the desired length
    var remainingChars = userLength - savePassword.length;

    // Function to get a random character from a given character set
    function getRandomCharacter(charSet) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      return charSet[randomIndex];
    }

    // Add characters from each selected character type until the password reaches the desired length
    while (remainingChars > 0) {
      if (isSpecialCharacter) {
        savePassword += getRandomCharacter(specialCharacters);
        remainingChars--;
      }

      if (isLowerCase && remainingChars > 0) {
        savePassword += getRandomCharacter(lowerCase);
        remainingChars--;
      }

      if (isUpperCase && remainingChars > 0) {
        savePassword += getRandomCharacter(upperCase);
        remainingChars--;
      }

      if (isNumbers && remainingChars > 0) {
        savePassword += getRandomCharacter(numbers);
        remainingChars--;
      }
    }

    return savePassword; // Return the generated password
  } else {
    window.alert("Outside of password range. Please try again.");
    return ""; // Password length outside the allowed range, return an empty string
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
