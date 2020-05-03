class Node {
    constructor(val) {
        this.value = val;
        this.left=this.right=null;
    }
}
class Tree {
    constructor(){this.root=null;}
}
let t = new Tree;
t.root = new Node(10);
t.root.left = new Node(6);
t.root.right = new Node(15);
t.root.left.left = new Node(3);
t.root.left.right = new Node(8);
t.root.right.right = new Node(20);
function preOrder(tree) {
    let data = [];
    let temp = tree.root;    
    function traverse(node) {
        data.push(node.value);
        if(node.left){
            traverse(node.left);
        }
        if(node.right){
            traverse(node.right)
        }
    }
    traverse(temp);
    return data;
}
console.log('preorder: ', preOrder(t)); // 10, 6, 3, 8, 15, 20;
function postOrder(tree) {
    let temp = tree.root;
    let data = [];
    function traverse(node) {
        if(node.left) {
            traverse(node.left);
        }
        if(node.right) {
            traverse(node.right);            
        }
        data.push(node.value);
    }
    traverse(temp);
    return data;
}
console.log('postorder', postOrder(t)); // 3, 8, 6, 20, 15, 10
function inOrder(tree) {
    let temp = tree.root;
    let data = [];
    function traverse(node) {
        if(node.left){
            traverse(node.left);
        }
        data.push(node.value);
        if(node.right){
            traverse(node.right)
        }
    }
    traverse(temp);
    return data;
}
console.log('inorder', inOrder(t)); // 3, 6, 8, 10, 15, 20
