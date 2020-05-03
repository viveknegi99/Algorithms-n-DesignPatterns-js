function reverse(str) {
    if(str.length === 1) { return str;}
    else {
        let s = str[str.length-1];
        s = s.concat(reverse( str.slice(0, str.length-1)))
        return s;
    }      
}
console.log(reverse('awesome')); // emosewa
console.log(reverse('rithmschool')); // loohcsmhtir
