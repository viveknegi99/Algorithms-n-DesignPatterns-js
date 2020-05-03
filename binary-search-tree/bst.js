class Node {
    constructor(val) {
        this.value = val;
        this.left = this.right = null;
    }
}
class BinarySearchTree {
    constructor(){ this.root = null;}
    insert(val){
        let n = new Node(val);
        if(this.root===null) {
            this.root = n;
        } else {
            let temp = this.root;
            while(true) {
                if(val < temp.value) {
                    if(temp.left===null) {
                        temp.left = n;
                        break;
                    }
                    temp = temp.left;
                } else {
                    if(temp.right===null) {
                        temp.right = n;
                        break;
                    }
                    temp = temp.right;
                }
            }
        }
        return this;
    }
    search(val) {
        if(val===null || val===undefined) { return false;}
        let temp = this.root;
        while(temp) {
            if(val === temp.value) { return true;}
            if(val < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return false;
    }
}
let bst = new BinarySearchTree;
bst.insert(20).insert(10).insert(30).insert(5).insert(15).insert(25);
console.log(bst);
console.log(bst.search(15)); // true
console.log(bst.search(35)); // false

