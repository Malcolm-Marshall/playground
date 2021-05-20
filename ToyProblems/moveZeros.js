
const moveZeros = (arr) => {

  let result = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      count++;
    }
  }

  while (count > 0) {
    result.push(0);
    count --;
  }

  return result;
};

console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])) // returns[false,1,1,2,1,3,"a",0,0]