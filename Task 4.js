//TODO: Find the largest palindrome made from the product of two 3-digit numbers.
//TODO:Найдите самый большой палиндром, полученный умножением двух трехзначных чисел
function num() {
   let mx = 0;
   let mult = 0;
     for (let i = 900; i <= 999; i++)
       for (let j = 900; j <= 999; j++){
       mult = i * j;
         if(palindrome(mult.toString())){
        mx = Math.max(mx, mult);
      };
     };
     return mx;
 };
  
 console.log(num());
 
 function palindrome(num) {
   let reversed = num
     .split('')
     .reverse()
     .join('');
   return num === reversed;
 }; //906609