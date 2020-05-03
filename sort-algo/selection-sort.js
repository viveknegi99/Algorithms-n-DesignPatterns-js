function selectionSort(arr) {
    if(!arr || !Array.isArray(arr)){ return null;}
    if(arr.length < 1) { return arr;}
    let min = null;
    let temp;
    for(let i = 0; i< arr.length-1; i++) {
        for(let j = i ; j < arr.length-1; j++) {
            if( min === null) {
                if(arr[j] < arr[j+1]) {min = j;}                    
                else { min = j+1}
            } else if( arr[min] > arr[j+1]) {
                min = j+1;
            }
        } 
        if( min !== i) {
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp; 
        }               
        min = null;        
    }
    return arr;
}
console.log( selectionSort([2, 5, 6, 1, 3, 8, 9, 0])); // [1, 2, 3, 5, 6, 8, 9]
