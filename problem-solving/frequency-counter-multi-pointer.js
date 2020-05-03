function areThereDublicates(...args) {
    let temp = {};
    for( let i of args) {
        if( i in temp ) {
            return true;
        } else {
            temp[i] = 1;
        }
    }

    return false;
}

console.log(areThereDublicates(1, 2, 3)); // false
console.log(areThereDublicates(1, 2, 2)); // true
console.log(areThereDublicates('a', 'b', 'c', 'a')); // true
