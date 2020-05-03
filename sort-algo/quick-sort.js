function pivot(arr, left = 0 , right=arr.length) {
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    let pivot = left;    
    for(let i= left+1; i<right ; i++) {
        if(arr[pivot] > arr[i]) {
            left++;
            swap(arr, left, i);
        }
    }
    swap(arr, left, pivot);
    console.log(arr);
    
    return left;
}
function quickSort(arr, left=0, right=arr.length){
    if(left<right) {
        let pivotIdx = pivot(arr,left, right);
        // left
        quickSort(arr, left, pivotIdx-1);
        // right
        quickSort(arr, pivotIdx+1, arr.length);
    }    
    return arr;
}

console.log( quickSort([100, 26, 23, 0, 37, 44, 17, 47, 39])); // [23, 17, 26]
