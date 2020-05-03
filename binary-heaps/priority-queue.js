class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor(){ this._values = []}
    enqueue(valObj) {
        if(this._values.length === 0) {
            this._values.push(valObj);            
        } else {
            this._values.push(valObj);
            let idx = this._values.length-1;
            let isPositionFound = false;
            while(!isPositionFound ) {
                let pIdx = Math.floor((idx-1)/2);
                if(pIdx < 0) {break;}
                if( this._values[pIdx].priority > this._values[idx].priority) {
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
    dequeue(){
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
                c = this._values[2*idx+1].priority < this._values[2*idx+2].priority?1:2;
            } else if( lChild && !rChild) {
                c = 1;
            }
            
            if(this._values[idx].priority > this._values[2*idx+c].priority ){
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
let pq = new PriorityQueue;
pq.enqueue(new Node('fever', 5)).enqueue(new Node('cold', 10))
.enqueue( new Node('heart attack', 1));
console.log(pq);
console.log(pq.dequeue());
console.log(pq);