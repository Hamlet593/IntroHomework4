Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

Solution

let newArr = [];
function getLager(arr, number){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > number){
      newArr.push(arr[i])
    }
  }
  if(newArr.length === 0){
      return 'Such values do not exist.';
    }
  return newArr;
}

console.log(getLager([10, 25, 16, -5, 30, 15, 24], 96));
console.log(getLager([1, 1, 2, -3, 0, 8, 4, 0], 9))