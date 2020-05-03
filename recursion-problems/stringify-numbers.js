function stringifyNumbers(obj) {    
    function isObj(o) {
        if( o && typeof o === 'object' && o.constructor.name === 'Object') {
            return true;
        } else { return false;}
    }
    function isNum(val) {
        if(val && typeof val === 'number'){
            return true;
        }
        return false;
    }
    if(!isObj(obj)) { return null; }

    let keys = Object.keys(obj);
    let val;
    for( let i = 0 ; i < keys.length ; i++) {
        val = obj[keys[i]];
        if( isNum(val)) {
            obj[keys[i]] = val.toString();
        } else if( isObj(val)) {
            stringifyNumbers(val)
        }
    }
}

function stringifyNumbers1(obj) {
    function isObj(o) {
        if( o && typeof o === 'object' && o.constructor.name === 'Object') {
            return true;
        } else { return false;}
    }
    function isNum(val) {
        if(val && typeof val === 'number'){
            return true;
        }
        return false;
    }
    if(!isObj(obj)) { return null; }

    let keys = Object.keys(obj);
    let myObj = {};
    let val;
    for( let i = 0 ; i < keys.length ; i++) {
        val = obj[keys[i]];
        
        if( isNum(val)) {
            myObj[keys[i]] = val.toString();
        } else if( isObj(val)) {
            myObj[keys[i]] = stringifyNumbers1(val);
        } else {
            myObj[keys[i]] = val;
        }
    }
    return myObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
let x = stringifyNumbers1(obj)
console.log(obj );
console.log(x);

