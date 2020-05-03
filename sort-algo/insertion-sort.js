function insertionSort(arr) {
    const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])
    for(let i =1 ; i< arr.length ; i++) {
        if(arr[i] < arr[i-1]) {
            for(let j = i ; j >0; j--) {
                if(arr[j] < arr[j-1]) {                    
                    swap(arr, j, j-1);                    
                } else { break;}
            }
        }
    }
    return arr;
}
//console.log(insertionSort([2, 1, 5, 8, 4, 3, 0])); // [0, 1, 2, 3, 4, 5, 8]

[1, 2].map(Function.call, Math.random )