//TODO: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//TODO: Какое самое маленькое число делится нацело на все числа от 1 до 20?
let arr = [];
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
 
for (let i = 0; i < newArr.length; i++) {
  const tempArr = []; 
  let k = 2;
 
  while (newArr[i] !== 1) { 
    if (newArr[i] % k === 0) {
      newArr[i] /= k;
      tempArr.push(k); 
    } else if (newArr[i] % k !== 0) { 
      k++;
    };
  };
 
  arr.forEach(elem => {
      const ind = tempArr.indexOf(elem);
      if (~ind)
          tempArr.splice(ind, 1); 
  });
 
  arr = arr.concat(tempArr); 
};
 
console.log(arr); 
 
let multiply = arr.reduce((prev, item) => prev * item);
console.log(multiply); //232792560
