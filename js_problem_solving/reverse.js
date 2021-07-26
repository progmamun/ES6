//sum er default value 0, max er default value array r first value
//string er defalut value null or Khali value
function reverseString(str){
  var reverse = "";
  for(var i = 0; i < str.length; i++){
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}

var statement = "Hello Alien vahi brother.";
var forAlien = reverseString(statement);
console.log(forAlien);