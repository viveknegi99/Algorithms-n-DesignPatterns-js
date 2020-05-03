// [-5, -3, -2, -1, 0, 1, 2, 3] [-3, 3]
function sumZero(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while( end > start) {
        let sum = arr[start] + arr[end];
        if( sum === 0 ){
            return[arr[start], arr[end]];                     
        } else if ( sum > 0) {
            end--;
        } else {
            start++;
        }
    }

    return ;
}

console.log(sumZero([-5, -3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-5, -4, -2, -1, 0, , 3]));
