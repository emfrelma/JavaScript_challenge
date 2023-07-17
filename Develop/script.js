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
// Ask user for their choice of length
  var userLength = window.prompt("Password Length:  Please enter a number between 8 and 128");
  userLength = parseInt(userLength);

//Check for valid length and if it's invalid then exit   
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

  //Check to include lower case
  var includeLower = window.prompt("Include lower case Y/N");
  if (includeLower === 'Y' || includeLower === "y") {
    includeLower = 'Y';
  }else{
    includeLower = 'N';
  }

  //Check to include numbers
  var includeNumeric = window.prompt("Include numbers Y/N");
  if (includeNumeric === 'Y' || includeNumeric === "y") {
    includeNumeric = 'Y';
  }else{
    includeNumeric = 'N';
  }

  //Check to include special characters
  var includeSpecialChars = window.prompt("Include special characters Y/N");
  if (includeSpecialChars === 'Y' || includeSpecialChars === "y") {
    includeSpecialChars = 'Y';
  }else{
    includeSpecialChars = 'N';
  }
  //for testing
  console.log(includeLower);
  console.log(includeUpper);
  console.log(includeNumeric);
  console.log(includeSpecialChars);

  //check to make sure at least 1 type was selected.  If none were selected, exit. 
  if ((includeLower === 'N') && (includeUpper === 'N') && (includeNumeric ===  'N') && (includeSpecialChars ===  'N')){
    alert("At least one type must be selected");
    return;
  }

  //Set valuse to use in password data generation
  var upperchars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerchars = 'abcdefghijklmnopqrstuvwxy';
  var numberchars = '0123456789';
  var specialchars = '!@#$%^&*()_+';
  var pswdchars = ' '  ;

  //Setup array of Y/N decisions and valuses to include  
  const pswdarray = [includeUpper, includeLower, includeNumeric, includeSpecialChars];
  const pswddata = [upperchars, lowerchars, numberchars, specialchars]
  console.log('PSWD String');
  console.log(pswdarray);

//Set the characters to be used in the password creation
var firsttype = 0
for (let i = 0; i < 4; i++) {
   if ((pswdarray[i] === 'Y') &&  (firsttype === 0)) {
      firsttype++;
      pswdchars = pswddata[i]
   }else if (pswdarray[i] === 'Y'){
      pswdchars =pswdchars.concat(pswddata[i]) ; 
    }
}


  console.log("Generated pswd characters");  
  console.log(pswdchars);
  
  //Randomly generate the password based on lenght and data types selected 
    var result = ' ';
    const pswdcharslength = pswdchars.length;
    for ( let i = 0; i < userLength; i++ ) {
        result += pswdchars.charAt(Math.floor(Math.random() * pswdcharslength));
    }
  console.log("password =  ");
  console.log(result);
 return result ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
