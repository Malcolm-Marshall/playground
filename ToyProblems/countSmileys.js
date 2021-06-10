//return the total number of smiling faces in the array
function countSmileys(arr) {

  let count = 0;

  for ( let i = 0; i < arr.length; i++) {

    arr[i].length === 2 ?
    arr[i][0] === ';' || ':' && (arr[i][1] === ')' || 'D)') ? count ++ : null
    : (arr[i][0] === ';' || ':') && (arr[i][2] === ')' || 'D') && (arr[i][1] === '~' || '-') ? count++ : null;
    // if (arr[i].length === 2) {
    //   console.log(arr[i][0], arr[i][1])
    //   if ((arr[i][0] === ';' || ':') && (arr[i][1] === ')' || 'D)')) {
    //     count ++;
    //   }
    // } else if (arr[i].length === 3) {
    //   if ((arr[i][0] === ';' || ':') && (arr[i][2] === ')' || 'D') && (arr[i][1] === '~' || '-')) {
    //     count ++;
    //   }
    // }
  }
  return count;

}

console.log(countSmileys([]))
console.log(countSmileys([':D',':~)',';~D',':)'])) //4
console.log(countSmileys([':)',':(',':D',':O',':;'])) //2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //1