function high(x){
  let vals = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }

  x = x.split(' ');

  let highest = '';
  let sum = 0;
  let temp = 0;

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      temp += vals[x][j];
    }
    if (temp > sum) {
      sum = temp;
      highest = x[i];
    temp = 0;
    }
  }
  // console.log('ubud'.charCodeAt(0) + 'ubud'.charCodeAt(1) + 'ubud'.charCodeAt(2) + 'ubud'.charCodeAt(3))
  // console.log('taxi'.charCodeAt(0) + 'taxi'.charCodeAt(1) + 'taxi'.charCodeAt(2) + 'taxi'.charCodeAt(3))
  return highest;
};


console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak') );
console.log(high('aa b'));
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));
