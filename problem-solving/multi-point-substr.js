function isSubSequence(arr1, arr2) {
    if(arr1.length > arr2.length) { return false;}
    let idx1 = 0, idx2 = 0;
    for( ; idx2 < arr2.length ; idx2++ ) {
        if( arr1[idx1] === arr2[idx2]) {
            idx1++;           
        }
        if(arr1.length === idx1) { return true;}
    }
    return false;
}

console.log( isSubSequence('hello', 'hello world')); // true
console.log( isSubSequence('sing', 'sting')); // true
console.log( isSubSequence('abc', 'abracadabra')); // true
console.log( isSubSequence('abc', 'acb')); // false
