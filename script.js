// Assignment code here
function generatePassword(){
  //1. seperate all characters
  //2. ask the user which characters they want and create a group of those characters only
 //3. select random characters from the creative group of characters
 //4. return the password
 
  return "pancakes"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
