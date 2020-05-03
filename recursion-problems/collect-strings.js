function collectStrings(obj) {
    function isObj(o) {
        if( o && typeof o === 'object' && o.constructor.name === 'Object') {
            return true;
        } else { return false;}
    }
    function isStr(val) {
        if(val && typeof val === 'string'){
            return true;
        }
        return false;
    }
    if(!isObj(obj)) { return;}
    let keys = Object.keys(obj);
    let buf = [];
    if(keys.length > 0) {
        for(let i = 0 ; i < keys.length ; i++) {
            let value = obj[keys[i]];
            if( isStr( value )) {
                buf.push(obj[keys[i]]);
            } else if( isObj( value ) ) {
               buf= buf.concat(collectStrings(value));
            } 
        }        
    } return buf;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])