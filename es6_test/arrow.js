// function doubleIt(num){
//   return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num * 2; // single paramiter
const add = (x, y) => x + y;
const give5 = () => 5;
// multiline
const bigParamiter = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
}

const result = add(50, 70);
const result2 = give5();
// const result = doubleIt(50);
const result3 = bigParamiter(7, 5);
console.log(result3);