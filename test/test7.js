let sumtwosmall1 = [19, 5, 42, 2, 77 ];
let sumtwosmall2 = [10, 343445353, 3453445, 3453545453453] ;
let sumtwosmall3 = [2, 9, 6, -11] ;
let sumtwosmall4 = [879, 953, 694, -847, 342, 211, -91, -723, 791, -587] ;
let sumtwosmall5 = [3683, 3902, 3951, -475, 1617, -2385 ] ;

function sumTwoSmallestNumbers(numbers) { 
  a = Math.min.apply(Math, numbers); 
  numbers.splice(a);
  b = Math.min.apply(Math, numbers);
  return (a + b) 
} 


console.log(sumTwoSmallestNumbers(sumtwosmall1));
console.log(sumTwoSmallestNumbers(sumtwosmall2));
console.log(sumTwoSmallestNumbers(sumtwosmall3));
console.log(sumTwoSmallestNumbers(sumtwosmall4));
console.log(sumTwoSmallestNumbers(sumtwosmall5));