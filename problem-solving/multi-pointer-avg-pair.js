function averagePair(arr, avg) {
    if( arr.length < 2) { return false;}
    let left, right;
    let idx = arr.length/2;
    for( let i = 0 ;  i < arr.length ; i++) {
        if( avg < arr[i]) {
            idx = i;
            break;
        }
    }
    left = idx-1;
    right = idx;
    while( left >= 0 ) {
        if( (arr[right] + arr[left])/2 === avg ) {
            return true;
        } 
        left--;
    }
    return false;
}

function betterAvgPair(arr, num) {
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2 
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3,4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log('===============================');
console.log(betterAvgPair([1, 2, 3], 2.5)); // true
console.log(betterAvgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(betterAvgPair([-1, 0, 3,4, 5, 6], 4.1)); // false
console.log(betterAvgPair([], 4)); // false