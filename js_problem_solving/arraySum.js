var numbers = [45, 65, 78, 12, 3, 54, 65];

function getArraySum(numbers){
  var sum = 0;
  for(var i =0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
var result = getArraySum(numbers);
// var result = getArraySum([43, 56, 12, 41, 86]);
console.log("Total of the numbers: ", result);
// var sum = 0;
// for(var i =0; i < numbers.length; i++){
//   var element = numbers[i];
//   sum = sum + element;
// }
// console.log("Total of the numbers: ", sum);