Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

Solution

function findBug(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i + 1]){
      return i;
    }
  }
  return -1;
}
console.log(findBug([-9, -4, -4, 3, 12, 4, 5]))
console.log(findBug([2, 12, 15, 48, 64]))