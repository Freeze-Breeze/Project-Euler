//TODO: What is the largest prime factor of the number 600851475143 ?
//TODO: Каков самый большой делитель числа 600851475143, являющийся простым числом?
let num = 600851475143, 
    arr = [],
    k = 2;

while (num !== 1) {
  if (num % k === 0) {
    num /= k;
    arr.push(k);
  } else if (num % k !== 0) {
    k++;
  };
};

console.log(arr[arr.length - 1]); //6875