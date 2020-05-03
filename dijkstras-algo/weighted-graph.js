class WeightedGraph {
    constructor(){ this.adjacencyList = {};}
    addVertex(vertex){
        this.adjacencyList[vertex] = [];
        return this;
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight: weight});
        this.adjacencyList[v2].push({node: v1, weight: weight});
        return this;
    }
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        // build up initial state
        for(let v in this.adjacencyList) {
            if(v === start) {
                distances[v] = 0;
                nodes.enqueue(v, 0);
            } else {
                distances[v] = Infinity;
                nodes.enqueue(v, Infinity);
            }
            previous[v] = null;
        }
        // loop as long as something to visit
        while(nodes._values.length>0) {
            smallest = nodes.dequeue().value;
            if(smallest === finish) {
                // done
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(smallest);
                break;
            } 
            if( smallest || distances[smallest] !== Infinity) {
                for(let neighbour in this.adjacencyList[smallest]) {
                    // find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    // claculate distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if( candidate < distances[nextNeighbour]) {
                        // updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate;
                        // updating previous - how to reach to neighbour
                        previous[nextNeighbour] = smallest;
                        // enqueue priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}
class PriorityQueue {
    constructor() {
        this._values = [];
    }
    enqueue(value, priority) {
        this._values.push({value, priority});
        this._sort();
    }
    _sort() {
        this._values.sort( (a, b) => a.priority - b.priority);
    }
    dequeue(){
        return this._values.shift();
    }
}
let g = new WeightedGraph;
g.addVertex("a").addVertex("b").addVertex("c")
.addVertex("d").addVertex("e").addVertex("f")
.addEdge("a", "b", 4).addEdge("a", "c", 2)
.addEdge("b", "e", 3).addEdge("c", "d", 2)
.addEdge("c", "f", 4).addEdge("d", "e", 3)
.addEdge("d", "f", 1).addEdge("e", "f", 1); 
console.log( g.dijkstra("a", "e") ) ; // a c d f e