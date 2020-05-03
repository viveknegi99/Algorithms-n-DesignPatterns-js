function capitalizeFirst(arr) {
    if(arr.length === 0) { return null;}
    let buf = [arr[0][0].toUpperCase() + arr[0].slice(1)];
    if(arr.length > 1) {
        buf= buf.concat( capitalizeFirst(arr.slice(1)));
    }    
    return buf;
}
console.log( capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
