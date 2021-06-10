const test = (str) => {
  str = str.split(' ');
  str = str.map((word) => word[0] === word[0].toUpperCase() ? word[0] = word[0].toLowerCase() : word = word)
  console.log(str.sort())
}

test('Given an arbitrary text document written in English, write a program that will generate a concordance, i.e. an alphabetical list of all word occurrences, labeled with word frequencies. Bonus: label each word with the sentence numbers in which each occurrence appeared.')