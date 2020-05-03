class MaxBinaryHeap {
    constructor() { this._values = []}
    insert(val){
        if(this._values.length===0){ 
            this._values.push(val);
        } else {
            this._values.push(val);
            let idx = this._values.length-1;
            let isPositionFound = false;
            while(!isPositionFound ) {
                let pIdx = Math.floor((idx-1)/2);
                if(pIdx<0){ break}
                if( this._values[pIdx] < this._values[idx]) {
                    const temp = this._values[idx];
                    this._values[idx] = this._values[pIdx];
                    this._values[pIdx] = temp;
                    idx = pIdx;
                } else {
                    isPositionFound = true;
                }
            }
        }
        return this;
    }
    extraxtMax(){
        if(this._values.length===0) { return undefined;}
        let max = this._values[0];
        if(this._values.length===1) { return max;}        
        this._values[0] = this._values[this._values.length-1];
        this._values.length = this._values.length-1;        
        let idx = 0;
        let cIdx;
        let temp;
        let c;
        while(true) {            
            let lChild = this._values[2*idx+1];
            let rChild = this._values[2*idx+2];
            if( lChild && rChild) {
                c = this._values[2*idx+1] > this._values[2*idx+2]?1:2;
            } else if( lChild && !rChild) {
                c = 1;
            }
            if(this._values[idx] < this._values[2*idx+c] ){
                cIdx = 2*idx+c;
                temp = this._values[cIdx];
                this._values[cIdx] = this._values[idx];
                this._values[idx] = temp;
                idx = cIdx;            
                if(idx>=this._values.length-1){break;}
            } else {
                break;
            }
        }
        return max;
    }
}
let mbh = new MaxBinaryHeap;
mbh.insert(41).insert(39).insert(33)
.insert(18).insert(27).insert(12).insert(55);
console.log(mbh);
console.log(mbh.extraxtMax()); // 55
console.log(mbh);
console.log(mbh.extraxtMax()); // 41
console.log(mbh);
