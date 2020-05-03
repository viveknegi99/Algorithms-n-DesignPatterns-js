class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const n = new Node(val);
    if (this.head === null) {
      this.tail = this.head = n;
    } else {
      this.tail = this.tail.next = n;      
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.length===0){return undefined;}
    if(this.length===1){
        let ret = this.head;
        this.head = this.tail = null;
        this.length--;
        return ret;
    }
    let temp = this.head;
    while(temp.next.next !== null) {
        temp = temp.next;
    }
    this.tail = temp;
    let ret = this.tail.next;
    this.tail.next = null;
    this.length--;
    return ret;
  }
  shift() {
    if(this.length===0){return undefined;}
    if(this.length===1){
        let ret = this.head;
        this.head = this.tail = null;
        this.length = 0;
        return ret;
    }
    let ret = this.head;    
    this.head = this.head.next;
    ret.next = null;
    this.length--;
    return ret;
  }
  unshift(val) {
    const n = new Node(val);
    this.length++;
    if(this.length===0){
        this.head = this.tail = n;        
        return this;
    }    
    n.next = this.head;
    this.head = n;
    return this;
  }
  get(idx) {
    if( idx < 0 || idx >= this.length || this.length===0){ return undefined;}
    let temp = this.head;
    let count =0;
    while(temp) {
        if(count === idx) { return temp;}
        temp = temp.next;
        count++;
    }
    return undefined;
  }
  set(idx, val) {
    let n = this.get(idx);
    if(n) {
        n.value = val;
        return true;
    } else {
        return falsel
    }
  }
  insert(idx, val) {
      const temp = new Node(val);
      if(idx===0 && this.length>0) {
        temp.next = this.head;
        this.head = temp;
        this.length++;
        return true;
      }
      let n = this.get(idx-1);      
      if(n) {
        temp.next = n.next;
        n.next = temp;
        this.length++;
        return true;
      } else {
          return false;
      }
      
  }
  remove(idx) {
    if(idx<0 || idx>=this.length) { return false;}
    if(idx===0) {
        return !!this.shift();
    }
    if(idx=== this.length-1){ 
        return !!this.pop();
    }
            
    let n = this.get(idx-1);
    n.next = n.next.next;
    this.length--;
    return true;
  }
  reverse() {
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      let node;
      let previous=null;
      for(let i=0; i<this.length;i++) {
        node = temp.next;
        temp.next = previous;
        previous = temp;
        temp = node;
      }
      return this;
  }
//   reverse() {
//     if(this.length===0) {return undefined;}
//     if(this.length===1) {return this;}
//     for(let i=this.length-1 ; i>0 ; i--) {
//         let n = this.get(i);
//         let n_1 = this.get(i-1);
//         n.next = n_1;
//         n_1.next = null;
//     }
//     let temp = this.tail;
//     this.tail = this.head;
//     this.head = temp;
//     return this;
//   }
}

let sll = new SinglyLinkedList();
sll.push("Vivek").push("Negi").push("Black");
console.log(sll);

// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll);

// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll);

console.log(sll.unshift('Abra'));
console.log(sll.unshift('Dabra'));
console.log(sll);

// console.log(sll.get(0)); // dabra
// console.log(sll.get(1)); // abra
// console.log(sll.get(2)); // vivek
// console.log(sll.get(30)); // undefined
// console.log(sll.set(0, 'mamba')); // true
// console.log(sll.get(0)); // mamba

console.log(sll.insert(1, 'Rambo')); // true
console.log(sll);
// console.log(sll.get(1).value); // rambo
// console.log(sll.remove(1)); // true
console.log(sll.reverse());




