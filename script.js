// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How many characters you want?");

  if (length < 8 || length >128) {
    alert("Please pick a length between 8 to 128 character")
    return
  }

  var needNumber = confirm("Do you want numbers?")
  var Numbers = '0123456789';

  var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var needLowercase = confirm("Do you want lowercase?")
  var Lowercase = "abcdefghijklmnopqrstuvwxyz";

  var needSplchar = confirm("Do you want spsecial character");
  var Splchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var retVal = "";
  
  for (var i = 0, n = Uppercase.length; i < length; ++i) {
      retVal += Uppercase.charAt(Math.floor(Math.random() * n));
      if (needNumber) {
        retVal += Numbers.charAt(Math.floor(Math.random() * n));
      }
      if (needLowercase) {
        retVal += Lowercase.charAt(Math.floor(Math.random() * n));
      }
      if (needSplchar) {
        retVal += Splchar.charAt(Math.floor(Math.random() * n));
      }
  }
  return retVal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});
