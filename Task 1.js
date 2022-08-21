//TODO: Find the sum of all the multiples of 3 or 5 below 1000.
//TODO: Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (!(i % 3 && i % 5)) {
    sum += i;
  };
};

console.log(sum); //233168