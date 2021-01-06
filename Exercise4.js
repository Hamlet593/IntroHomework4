Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

Solution

let result = Infinity;
function minPos(arr){
  if(arr[0] >= 0 && arr[0] < result){
    result = arr[0];
  }
  arr.shift();
  if(arr.length !== 0){
    return minPos(arr);
  }
  else{
    if(result === Infinity){
      return -1;
    }
    return result;
  }
}

console.log(minPos([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minPos([45, -9, 15, 5, -78]));
console.log(minPos([-5, -9, -111, -1000, -7]));