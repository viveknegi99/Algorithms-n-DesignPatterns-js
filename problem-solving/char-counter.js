function charCounter(str) {
    let result = {};
    for( let c of str) {
        // check for number
        if(c === ' ') {
            continue;
        }
        else if( !isNaN(c)) {
            // check whether this number already present or not
            if(result[c]) {
                result[c] += 1;
            } else {
                result[c] = 1;
            }
        }
        // check for char
        else if (typeof c === 'string' ) {
            let x = c.toLowerCase();
            if( result[x] ) {
                result[x] += 1;
            } else {
                result[c.toLowerCase()] = 1;
            }
        }
    }
    return result;
}

function betterCharCounter(str) {
    let result = {};
    for( let c of str) {
        let char = c.toLowerCase();
        if(/[a-z0-9]/.test(char) ){
            result[char] = ++result[char] || 1;            
        } 
    }
    return result;
}

console.log(charCounter('aaaa'));
console.log(charCounter('aAbcC C1  2M90m9'));

console.log(betterCharCounter('aaaa'));
console.log(betterCharCounter('aAbcC C1  2M90m9'));

