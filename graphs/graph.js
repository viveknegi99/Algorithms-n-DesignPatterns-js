class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) { this.adjacencyList[vertex] = [];}
        return this;
    }
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]){ return undefined;}
        let arr = this.adjacencyList[vertex];
        while(arr.length>0) {
            this.removeEdge(vertex, arr[0]);
        }        
        delete this.adjacencyList[vertex];
        return this;
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return this;
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2),1);
        this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1),1);
        return this;
    }
}
let g = new Graph;
// console.log( g.addVertex('vivek').addVertex('black')
// .addVertex('negi').addEdge('vivek', 'negi').addEdge('vivek', 'black')
// .removeVertex('vivek') )
//.removeEdge('vivek', 'negi'))
g.addVertex("a").addVertex("b").addVertex("c")
.addVertex("d").addVertex("e").addVertex("f")
.addEdge("a", "b").addEdge("a", "c").addEdge("b", "d")
.addEdge("c", "e").addEdge("d", "e").addEdge("d", "f")
.addEdge("e", "f");
function dfsRecursive(graph,vertex) {
    let visited = {};
    let result = [];
    dfs(vertex);    
    function dfs(vertex) {
        let arr = graph.adjacencyList[vertex];
        result.push(vertex);
        visited[vertex] = true;
        for(let v of arr) {
            if(!visited[v]) {
                dfs(v);
            }
        }
    }
    return result;
}
function dfsIterative(graph, vertex) {
    let visited = {};
    let result = [];
    let stack = [vertex];
    visited[vertex] = true; 
    while(stack.length>0) {
        let v = stack.pop();    
        result.push(v);
        
        let arr = graph.adjacencyList[v];
        for(let a of arr) {
            if(!visited[a]) {
                stack.push(a);
                visited[a] = true;                
            }            
        }
    }
    return result;
}
function breadthFirstSearch(graph, vertex) {
    let result = [];
    let visited = {};
    let queue = [vertex];
    visited[vertex] = true;
    while(queue.length>0){
        let v = queue.shift();
        result.push(v);
        let arr = graph.adjacencyList[v];
        for( let a of arr) {
            if(!visited[a]) {
                visited[a] = true;
                queue.push(a);
            }
        }
    }
    return result;
}
console.log(dfsRecursive(g, "a"));
console.log(dfsIterative(g, "a"));
console.log(breadthFirstSearch(g, "a"));
