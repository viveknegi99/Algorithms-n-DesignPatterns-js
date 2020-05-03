class HashMap {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for(let i=0 ; i < Math.min(key.length, 100) ; i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total*WEIRD_PRIME + value)%this.keyMap.length; 
        }
        return total;
    }
    set(key, value) {
        let idx = this._hash(key);
        let obj = [key, value];
        if ( !Array.isArray(this.keyMap[idx])) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push(obj);
        return this;
    }
    get(key1) {
        let idx = this._hash(key1);
        let arr = this.keyMap[idx];
        if(arr) {
            for(let [key, value] of arr) {
                if(key === key1) {
                    return value;
                }
            }
        }
        return undefined;        
    }
    keys(){
        let temp = [];
        let data = [];
        for(let a of this.keyMap) {
            if(a){ temp.push(a)}
        }
        for(let arr of temp) {
            data.push(arr[0][0]);
        }
        return data;
    }
    values(){
        let temp = this.keys();
        let data = [];
        for(let k of temp) {
            let val = this.get(k);
            if( data.indexOf(val) === -1) {
                data.push(this.get(k));
            }           
        }        
        return data;
    }
}
let hm = new HashMap();
hm.set('vivek', 10).set('negi', 20);
//console.log(hm);

//console.log(hm.get('negi'));
console.log(hm.keys()); // vivek negi
console.log(hm.values()); // 10 20


