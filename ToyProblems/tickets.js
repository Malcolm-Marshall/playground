
const tickets = (arr) => {

  let twoFive = 0;
  let fifty = 0;
  let hundred = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== 25) {
      return 'NO';
    }

    if (arr[i] === 100) {
      if (twoFive >= 1 && fifty >= 1) {
        twoFive--;
        fifty--;
        hundred++;
      } else if (twoFive >= 3) {
        twoFive -= 3;
        hundred++;
      } else {
        return 'NO';
      }
    }

    if (arr[i] === 50) {
      if (twoFive >= 1) {
        twoFive--;
        fifty++;
      } else {
        return 'NO';
      }
    }

    if (arr[i] === 25) {
      twoFive++;
    }
  }
  return 'YES'
};

console.log(tickets([25, 25, 50])) // => YES
console.log(tickets([25, 100])) // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
