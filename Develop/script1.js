// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// Ask user for their choice
  var userLength = window.prompt("Password Lenght:  Please enter a number between 8 and 128");
  userLength = parseInt(userLength);

//Check for valid length   
  if (isNaN(userLength)  || userLength < 8 || userLength > 128) {
      alert("invalid length");
      return;
  }

//Check to include upper case
  
    var includeUpper = window.prompt("Include upper case Y/N");
  if (includeUpper === 'Y' || includeUpper === "y") {
    includeUpper = 'Y';
  }else{
    includeUpper = 'N';
  }

  var includeLower = window.prompt("Include lower case Y/N");
  if (includeLower === 'Y' || includeLower === "y") {
    includeLower = 'Y';
  }else{
    includeLower = 'N';
  }

  var includeNumeric = window.prompt("Include numbers Y/N");
  if (includeNumeric === 'Y' || includeNumeric === "y") {
    includeNumeric = 'Y';
  }else{
    includeNumeric = 'N';
  }

  var includeSpecialChars = window.prompt("Include special characters Y/N");
  if (includeSpecialChars === 'Y' || includeSpecialChars === "y") {
    includeSpecialChars = 'Y';
  }else{
    includeSpecialChars = 'N';
  }
  //var includeUpper= confirm("include uppercase letters?") ;  
  //var includeUpper = confirm("include uppercase letters?") ;    
  //var includeLower = confirm("include lowercase letters?") ;  
  //var includeNumeric = confirm("include numbers?") ;
  //var includeSpecialChars = confirm("include special characters?") ;
  console.log(includeLower);
  console.log(includeUpper);
  console.log(includeNumeric);
  console.log(includeSpecialChars);
  if ((includeLower === 'N') && (includeUpper === 'N') && (includeNumeric ===  'N') && (includeSpecialChars ===  'N')){
    alert("At least one type must be selected");
    console.log("loop")
    return;
  }

  var upperchars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerchars = 'abcdefghijklmnopqrstuvwxy';
  var numberchars = '0123456789';
  var specialchars = '!@#$%^&*()_+';
  var pswdchars = ' '
  ;

  if(includeUpper === 'Y') {
    pswdchars = upperchars;
  }

  if ( includeLower ==='Y') {
      pswdchars = pswdchars.concat(lowerchars);
  }
  console.log("lower = no")
  if ( includeNumeric ==='Y') {
      pswdchars = pswdchars.concat(numberchars);
  }
  console.log("includenumeric = no")
  if ( includeSpecialChars ==='Y') {
        pswdchars =pswdchars.concat(specialchars) ;  
  }
    
  console.log(pswdchars);

  //function generateString(userLength) {
    var result = ' ';
    const pswdcharslength = pswdchars.length;
    for ( let i = 0; i < userLength; i++ ) {
        result += pswdchars.charAt(Math.floor(Math.random() * pswdcharslength));
    }
console.log("password =  ");
console.log(result);
 return result ;
}
//}
 
  

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  console.log(result);
//  var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
