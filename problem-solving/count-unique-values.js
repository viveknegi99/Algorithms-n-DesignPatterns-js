// [1, 1, 1, 2] 2
// [1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7] 7
function countUnique(arr) {
  let counter = arr.length > 0 ? 1 : 0;
  if (!counter) {
    return 0;
  }
  let idx = 0;
  while (idx < arr.length - 1) {
    if (arr[idx] !== arr[idx + 1]) {
      counter++;
    }
    idx++;
  }
  return counter;
}

function betterCountUnique(arr) {
  
  let idx1 = 0;
  let idx2 = 1;
  if( arr.length === 0 ) {return 0;}
  while (idx2 < arr.length ) {
    if( arr[idx1] !== arr[idx2]) {
        idx1++;
        arr[idx1] = arr[idx2];
    }
    idx2++;
  }
  if( idx1 === 0 && idx2 === arr.length-1 ){ return 0;}
  return idx1 + 1 ;
}
console.log(countUnique([1, 1, 1, 2]));
console.log(countUnique([1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7]));
console.log(countUnique([]));
console.log(countUnique([-2, -1, -1, 0, 1]));

console.log('========');

console.log(betterCountUnique([1, 1, 1, 2]));
console.log(betterCountUnique([1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7]));
console.log(betterCountUnique([]));
console.log(betterCountUnique([-2, -1, -1, 0, 1]));
