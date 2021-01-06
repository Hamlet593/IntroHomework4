Write a recursive function to determine whether all digits of the number are odd or not.

Solution

function checkAllOdd(number){
  let eachDigit = number % 10;
  while(number){
    if(eachDigit % 2 !== 0) {
      console.log(eachDigit + ' eachDigit', number + ' number');
      return checkAllOdd((number - eachDigit) / 10);
    }
    else {
      return false;
    };
  }
  return true;
}
console.log(checkAllOdd(4211133));
console.log(checkAllOdd(7791));
console.log(checkAllOdd(5))