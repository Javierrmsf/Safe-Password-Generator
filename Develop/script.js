// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



// Write password to the #password input
function writePassword() {
  

 var characters1 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@$%&/()=?¿[]+{}^";
 var passwordlength = prompt("enter password length");//added prompt to ask for password length
 var password = "" //restarts password to " " in order to add the new password to this blank space, i
                   //not doing this results in having a larger password everytime the generate password button is clicked

  for (var i = 1; i <= passwordlength; i++){ //fixed the for loop to have the exact number of characters stated by the user in the for loop
  var randomnumbergenerator = Math.floor(Math.random() * characters1.length);
  password += characters1.substring(randomnumbergenerator,randomnumbergenerator + 1); //password generator using lower case, capital letters and special characters.

  }
  document.querySelector("#password").value = password;
}  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
