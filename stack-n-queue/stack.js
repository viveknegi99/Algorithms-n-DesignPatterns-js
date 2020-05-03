class Node {
    constructor(val){
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}
class Stack {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    push(val) {
        if(val===null || val===undefined) { return undefined;}
        let n = new Node(val);
        if(this.length === 0) {
            this.tail = n;            
        } else {
            this.tail.next = n;
            n.previous = this.tail;
            this.tail = n;
        }
        this.length++;
        return this.length;
    }
    pop() {
        if(this.length===0) { return undefined;}
        let n = this.tail;
        this.tail = this.tail.previous;
        this.length--;
        n.next=n.previous=null;
        return n;
    }
}
let s = new Stack();
console.log( s.push('a')); // 1
console.log( s.push(45)); // 2
console.log( s.push('rog')); // 3
console.log( s.pop()); // rog
console.log( s.pop()); // 45
console.log( s.pop()); // a
console.log( s.pop()); // undefined
console.log(s); 
