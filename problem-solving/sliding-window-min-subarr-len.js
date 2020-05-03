function minSubArrLen(arr, minVal) {
    let start = 0;
    let temp = 0;
    let end = 0;
    let minLen = Infinity;
    while( start < arr.length) {
        
        if( temp >= minVal ){
            minLen = Math.min( minLen, end-start);
            temp -= arr[start];
            start++;            
        } else if( temp < minVal && end < arr.length) {
            temp += arr[end];
            end++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log( minSubArrLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log( minSubArrLen([2, 1, 6, 5, 4], 9)); // 2
console.log( minSubArrLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log( minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));// 3
console.log( minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));// 5
console.log( minSubArrLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log( minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
