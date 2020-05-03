class Node {
    constructor(val) {
        this.value = val;
        this.next= null;      
        this.previous=null;  
    }
}
class Queue {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    enqueue(val){
        if(val===null || val===undefined){ return undefined;}
        let n = new Node(val);
        if(this.length===0) {
            this.head = this.tail = n;
        } else {
            n.next = this.head;
            this.head.previous = n;
            this.head = n;
        }
        this.length++;
        return this.length;
    }
    dequeue() {
        if(this.length===0){ return undefined;}
        let n = this.tail;
        if(this.length===1){
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
            n.next=n.previous=null;
        }
        this.length--;
        return n;
    }
}
let q = new Queue;
console.log(q.enqueue('r')); // 1
console.log(q.enqueue(90)); // 2
console.log(q.enqueue(2.2)); // 3
console.log(q.dequeue()); // r
console.log(q.dequeue()); // 90
console.log(q.dequeue()); // 2.2
console.log(q);

