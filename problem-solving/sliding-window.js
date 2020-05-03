// ([1, 2, 5, 2, 8, 1, 5], 2) 10
function maxSubArraySum(arr, len) {
    if(!arr.length || (arr.length < len)){ return null;}
    let temp = 0;
    let sumArr = [];
    let max = -Infinity;
    for( let i = 0; i < arr.length - (len-1) ; i++) {
        temp = 0;  
        for( let j = 0 ; j < len ; j++) {
           temp += arr[i+j];            
        }       
        if( temp > max){ max = temp;}        
              
    }
    return max;
}

function betterMaxSubArraySum( arr, len ) {
    if( arr.length < len ) { return null;}
    let max = 0;
    let temp = 0;
    
    for( let i = 0; i < len ; i++) {
        max += arr[i];
    }
    for( let i = len; i < arr.length ; i++ ) {
        temp = max - arr[i-len] + arr[i];
        if( temp > max) { max = temp;}
    }

    return max;
}

console.log(betterMaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(betterMaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(betterMaxSubArraySum([4,2,1,6], 1));
console.log(betterMaxSubArraySum([4,2,1,6,2], 4));
console.log(betterMaxSubArraySum([], 4));
console.log('=======');
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4,2,1,6], 1));
console.log(maxSubArraySum([4,2,1,6,2], 4));
console.log(maxSubArraySum([], 4));

 