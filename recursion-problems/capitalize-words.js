function capitalizedWords( arr ) {
    if( !(arr && Array.isArray(arr) && arr.length > 0) ) { return null;}
    let buf = [arr[0].toUpperCase()];
    if(arr.length > 1) {
        buf = buf.concat( capitalizedWords(arr.slice(1)) )
    }
    return buf;
    
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']