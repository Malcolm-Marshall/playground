/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

*/

const spinWords = (str) => {

  let splitStr = str.split(' ');
  let result = '';

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length >= 5) {
      result += splitStr[i].split('').reverse().join('')
      i !== (splitStr.length - 1) ? result += ' ' : null;
      continue;
    }
    result += splitStr[i];
    i !== (splitStr.length - 1) ? result += ' ' : null;
  }
  return result;
}


console.log(spinWords("Hey fellow warriors")) //=> "Hey wollef sroirraw"
console.log(spinWords("This is a test")) //=> "This is a test"
console.log(spinWords("This is another test")) //=> "This is rehtona test"