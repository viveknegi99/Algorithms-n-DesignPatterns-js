// 182, 281 = true
function sameFrequency(n1, n2) {
    let num1 = n1.toString();
    let num2 = n2.toString();
    if( num1.length !== num2.length) { return false;}
    let obj1 = {};
    let obj2 = {};
    for ( let c of num1){
        obj1[c] = ++obj1[c] || 1;
    }
    for ( let c of num2){
        obj2[c] = ++obj2[c] || 1;
    }
    for( let k in obj1) {
        if(obj1[k] !== obj2[k]){ return false;}
    }
    return true;
}

console.log( sameFrequency(182, 281)); // true
console.log( sameFrequency(34, 14)); // false
console.log( sameFrequency(3589578, 5879385)); // true
console.log( sameFrequency(22, 2222)); // false

