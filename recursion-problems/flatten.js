function flatByLoop(arr) {
    let res = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if( !Array.isArray(arr[i])) {
            res.push(arr[i]);
        } else {
            res = res.concat( flatByLoop(arr[i]));            
        }
    }
    return res;
}
console.log( flatByLoop([1, [2]])); // [1,2]
console.log( flatByLoop([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatByLoop([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatByLoop([[1],[2],[3]])) // [1,2,3]
console.log(flatByLoop([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]