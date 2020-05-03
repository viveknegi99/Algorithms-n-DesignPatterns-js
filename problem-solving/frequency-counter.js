// [3, 1, 2 ] is same [1, 4, 9]
function same(arr1, arr2) {
    if( arr1.length !== arr2.length ) {
        return false;
    }    
    return arr1.map(v => v*v).filter( v =>  arr2.includes(v)).length === arr1.length;
}

function betterSame(arr1, arr2) {
    if( arr1.length !== arr2.length ) {
        return false;
    }
    // create object that contains unique array items with their count
    obj1 = {};
    obj2 = {};
    for( let a of arr1 ) {
        obj1[a] = ++obj1[a]  || 1;
    }    
    for( let a of arr2 ) {
        obj2[a] = ++obj2[a]  || 1;
    }
    //console.log(obj1, obj2);
    for( let k in obj1 ) {
        if( !(k**2 in obj2) ) { return false;}
        if( obj1[k] !== obj2[k*k]) { return false;}
    }
    return true;
}

console.log( same([1, 3, 4], [1, 16, 9])); // true
console.log( same([1, 3, 4], [1, 16])); // false
console.log( same([1, 3, 4], [16, 16, 9])); // false

console.log( betterSame([1, 3, 4], [1, 16, 9])); // true
console.log( betterSame([1, 3, 4], [1, 16])); // false
console.log( betterSame([1, 3, 4], [16, 16, 9])); // false
