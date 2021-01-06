Write a function, which receives two numbers as arguments and finds all numbers between 
them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

Solution

function getEven(a, b){
  let newArr = [];
  let num1 = Math.min(a, b);
  let num2 = Math.max(a, b);
  for(let i = num1; i <= num2; i++){
    let iStr = i + '';
    let num = i;
    let eachDigit;
    for(let j = 0; j < iStr.length; j++){
      eachDigit = num % 10;
      num = (num - eachDigit) / 10;
      if(eachDigit % 2 !== 0) break;
    }
    if(eachDigit % 2 === 0){
      newArr.push(i);
    }
  }
  if(newArr.length === 0) {
    return 'such values does not exist';
  }
  return newArr;
}
console.log(getEven(19, 42))
console.log(getEven(99, 199))