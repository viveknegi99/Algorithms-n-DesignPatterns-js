function merge(arr1, arr2){
    let arr = [];
    let left=0, leftMax=arr1.length, right=0, rightMax=arr2.length;
    let len = arr1.length + arr2.length;
    for(let i=0; i<len ; i++) {
        if(left >= leftMax) {
            arr.push(...arr2.slice(right));
            return arr;
        }
        if(right >= rightMax) {
            arr.push(...arr2.slice(left));
            return arr;
        }
        if(arr1[left] < arr2[right]) {
            arr.push(arr1[left]);
            left++;
        } else {
            arr.push(arr2[right]);
            right++
        }
    }
    return arr;
}
//console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]

function mergeSort(arr) {
    if(arr.length <=1) { return arr;}
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log(mergeSort([1, 10, 50, 2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]