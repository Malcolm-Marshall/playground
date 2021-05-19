// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a 32-bit integer, return the number with its bits reversed.

// For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111.

const binary = (int) => {
  int = int.toString();
  console.log(int)
  for (let i = 0; i < int.length; i++) {
    if (int[i] === '1') {
      int[i] = '0';
    } else {
      int[i] = '1'
    }
  }
  return parseInt(int);
}

let input = 1111000011110000111100001111000;

console.log(binary(input));