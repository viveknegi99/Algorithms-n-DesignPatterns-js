class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    push(val) {
        let n = new Node(val);        
        if(this.length === 0) {
            this.head = this.tail = n;            
        }else {            
            this.tail.next = n;
            n.previous = this.tail;            
            this.tail = n;            
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) {return undefined;}
        let ret;
        if(this.length===1) {
            ret = this.head;
            this.head = this.tail = null;
        } else {
            ret = this.tail;            
            this.tail = this.tail.previous;
            this.tail.next = null;
            ret.previous = null;
        }
        this.length--;
        return ret;
    }
    shift() {
        if(this.length===0) { return undefined;}
        let ret = this.head;
        if(this.length===1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
            ret.next = null;
        }
        this.length--;
        return ret;
    }
    unshift(val){        
        if(this.length===0){
           return this.push(val);
        }        
        let n = new Node(val);
        n.next = this.head;
        this.head.previous = n;
        this.head = n;
        this.length++;
        return this;
    }
    get(idx) {
        if(idx<0 || idx>=this.length) {return undefined;}
        if(idx===0) { return this.head;}
        if(idx===this.length-1) { return this.tail;}
        let count = 0;
        let temp;
        if(idx < this.length/2) {
            temp = this.head;
            while(count < idx) {
                temp = temp.next;
                count++;
            }           
        } else {
            count = this.length-1;
            temp = this.tail;
            while(idx < count) {
                temp = temp.previous;
                count--;
            }           
        }
        return temp;
    }
    set(idx, val) {
        if(idx<0 || idx>=this.length) { return false;}
        let n = this.get(idx);
        n.value = val;
        return true;

    }
    insert(idx, val) {
        if(idx<0 || idx>this.length) { return false;}
        if(idx===0) { return !!this.unshift(val);}
        if(idx===this.length) { return !!this.push(val);}
        let temp = this.get(idx-1);
        let n = new Node(val);
        n.next = temp.next;
        n.previous = temp;
        temp.next = n;
        return true;
    }
    remove(idx) {
        if(idx<0 || idx>=this.length) { return undefined;}
        if(idx===0) { return !!this.shift();}
        if(idx===this.length-1) { return !!this.pop();}
        let temp = this.get(idx-1);
        let ret = temp.next;
        let next = temp.next.next;
        temp.next = next;
        next.previous = temp;
        ret.next = ret.previous = null;
        this.length--;
        return ret;

    }
    reverse(){
        if(this.length === 0) {return;}
        if(this.length === 1) { return this;}
        let temp = null;
        let tailTemp = this.tail;
        let tailNextTemp = null
        while(tailTemp.previous!==null) {
            tailNextTemp = tailTemp.previous;
            tailTemp.next = tailNextTemp;
            tailTemp.previous = temp;
            temp = tailTemp;
            tailTemp = tailNextTemp;
        }
        tailTemp.previous = tailTemp.next;
        tailTemp.next=null;
        temp = this.tail;
        this.tail = this.head;
        this.head = temp;        
        return this;
    }
}
let dll = new DoublyLinkedList;
console.log( dll.push('vivek').push('negi'));
// console.log( dll.pop());
dll.push('red');
//console.log( dll.shift());
console.log( dll.unshift('black'));
console.log( dll.get(1));
console.log( dll.set(1, 'viv'));
console.log( dll);
console.log( dll.insert(1,'new'));
console.log( dll);
console.log( dll.remove(1));
console.log( dll);
console.log( dll.reverse());