class Node {
    constructor(val) {
        this.value = val;
        this.left=this.right=null;
    }
}
class Tree {
    constructor(){this.root=null;}
}
function bfs(tree) {
    let temp1 = tree.root;   
    let queue = [];
    let visited = [];
    queue.push(temp1);
    while(queue.length>0) {
        let temp = queue.shift();
        if(temp.left){ queue.push(temp.left)}
        if(temp.right){ queue.push(temp.right)}
        visited.push(temp.value);
    } 
    
    return visited;
}

let t = new Tree;
t.root = new Node(10);
t.root.left = new Node(6);
t.root.right = new Node(15);
t.root.left.left = new Node(3);
t.root.left.right = new Node(8);
t.root.right.right = new Node(20);
console.log(bfs(t)); // 10, 6, 15, 3, 8, 20
