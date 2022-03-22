// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



// Write password to the #password input
function writePassword() {
  
 var passwordlength = prompt("enter a password length between 8 and 128 characters");//added prompt to ask for password length
 while(passwordlength < 8 || passwordlength > 128 ){
  var passwordlength = prompt("try again, enter a password length between 8 and 128 characters");//added prompt to ask for password length again in case it is more than less than 8 or more than 128 characters long.
 }
 var specialcharacters = "@$%&/()=?¿[]+{}^#*";
 var capitalcharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
 var numbercharacters = "0123456789";

 var capitalprompt = "PLEASE ENTER THE LETTER ONLY: a) do you want capital letters, b) lowercase letters, c) both, d) none"
 while(capitalprompt!=="a" || capitalprompt!=="b" || capitalprompt!=="c" || capitalprompt!== "d"){
  var capitalprompt = "try again, PLEASE ENTER THE LETTER ONLY: a) do you want capital letters, b) lowercase letters, c) both, d) none"
 }

 


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
