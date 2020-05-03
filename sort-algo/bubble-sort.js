function bubbleSort(arr) {
    let isSwap = false;
    if(!arr) { return null;}
    if( arr.length <=1){return arr; }
    for(let i = 0 ; i < arr.length; i++ ) {
        isSwap = false;
        for( let j = 0; j< arr.length-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwap = true;
            }
        }
        if(!isSwap) {break;}
    }
    return arr;
}
//console.log(bubbleSort([2, 5, 1, 8, 3, 7])); // [1, 2, 3, 5, 7, 8]
console.log(bubbleSort([8, 1, 2, 3, 4, 5]));
