function numAtIndex(num, idx) {
  num = num.toString();
  let val = parseInt(num[num.length - idx]);
  if (val) {
    return val;
  }
  return 0;
}
function numLen(num) {
  return num.toString().length;
}
function maxNumLen(arr) {
  let max = 0;
  for (let num of arr) {
    max = Math.max(max, numLen(num));
  }
  return max;
}
function radixSort(arr) {
  let bucket;
  let maxCount = maxNumLen(arr);
  for (let i = 1; i < maxCount; i++) {
    let bucket = Array(10)
      .fill(0)
      .map((val) => []);
    for (let j = 0; j < arr.length; j++) {
      let k = numAtIndex(arr[j], i);

      bucket[k].push(arr[j]);
    }

    arr = [].concat(...bucket);
  }
  return arr;
}
console.log(radixSort([45, 21, 1, 22, 666666, 33, 444, 5555])); // [1, 22, 33, 444, 5555, 666666]
