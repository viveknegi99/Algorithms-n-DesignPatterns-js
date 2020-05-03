// validAnagram('anagram', 'nagaram') true
// aaz !== zza

function anagram(str1, str2) {
    // check whether length is equal
    if( str1.length !== str2.length) { return false;}
    // check frequency of characters should match in both strings
    let obj1 = {};
    let obj2 = {};
    for( let c of str1) {
        obj1[c] = ++obj1[c] || 1;
    } 
    for( let c of str2) {
        obj2[c] = ++obj2[c] || 1;
    }
    // check length after counting char frequency
    if( Object.keys(obj1).length !== Object.keys(obj2).length) { return false;}
    for( let k in obj1) {
        if( obj1[k] !== obj2[k]) { return false;}
    }
    return true;
}

function betterAnagram(str1, str2) {
    if( str1.length !== str2.length) { return false;}    
    let obj1 = {};
    for( let c of str1) {
        obj1[c] = ++obj1[c] || 1;
    } 
    for( let c of str2) {
        if( !obj1[c]) { return false;}
        else { --obj1[c]}
    }
    return true;
}

console.log( anagram('anagram', 'nagaram') );
console.log( anagram('aza', 'azz') );
console.log( anagram('', '') );
console.log( anagram('qwerty', 'qeywrt') );
console.log( anagram('texttwisttime', 'timetwisttext') );
console.log('============');

console.log( betterAnagram('anagram', 'nagaram') );
console.log( betterAnagram('aza', 'azz') );
console.log( betterAnagram('', '') );
console.log( betterAnagram('qwerty', 'qeywrt') );
console.log( betterAnagram('texttwisttime', 'timetwisttext') );
