function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length-1;
    let pivot = Math.floor((left + right)/2 );
    while(left <= right) {
        if(arr[pivot] === val) { return pivot;}
        else if( arr[pivot] > val) {
            right = pivot-1;
            pivot = Math.floor((left + right)/2 );
        } else{
            left = pivot+1;
            pivot = Math.floor((left + right)/2 );
        }
    }
    return -1;
}
console.log( binarySearch([10, 15, 20, 25, 30], 15));
