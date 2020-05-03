function nestedEvenSum(obj) {
    function isObj(o) {
        if( o && typeof o === 'object' && o.constructor.name === 'Object') {
            return true;
        } else { return false;}
    }
    function isEven(val) {
        if(val && typeof val === 'number' && val%2 === 0){
            return true;
        }
        return false;
    }
    if(!isObj(obj)) { return;}
    let keys = Object.keys(obj);
    let sum = 0;
    if(keys.length > 0) {
        for(let i = 0 ; i < keys.length ; i++) {
            let value = obj[keys[i]];
            if( isEven( value )) {
                sum += obj[keys[i]];
            } else if( isObj( value ) ) {
                sum+= nestedEvenSum(value);
            } 
        }        
    } return sum;
     
}
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };  
console.log( nestedEvenSum(obj1)); // 6
console.log( nestedEvenSum(obj2)); // 10

