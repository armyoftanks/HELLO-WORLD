function isPasswordValid(input) {
  if(hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
    console.log('This password is valid yo');
  }else{
    console.log('nah yo, try again');
  }

  if(!hasUppercase(input)){
    console.log('the password needs a capital letter. yo.');
  }
   if(!hasLowercase(input)){
    console.log('the password needs a lower case letter. yo.');
  }
   if(!isLongEnough(input)){
    console.log('the password needs at least 8 characters. yo.');
  }

  if(!hasSpecialCharacter(input)){
    console.log('the password needs a special character. yo.');
  }
}

function hasUppercase(input) {
  for(i=0; i<input.length; i++){
    if(input[i]==input[i].toUpperCase()){
      return true;
    }
  }
}

function hasLowercase(input) {
  for(i=0; i<input.length; i++){
    if(input[i]==input[i].toLowerCase()){
      return true;
    }
  }
}

function isLongEnough(input) {
    if(input.length>=8){
      return true;
    }
}

function hasSpecialCharacter(input){
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','=','-','<','>','?',':',';',']','[','}','{','|','.',','];

  for(i=0; i<input.length; i++){
    for(x=0; x<specialCharacters.length; x++){
      if(specialCharacters[x]==input[i]){
        return true;
      }
    }
  }
}

var password = prompt('Please create a password');
isPasswordValid(password);
