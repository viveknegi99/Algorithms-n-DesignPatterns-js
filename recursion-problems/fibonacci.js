function fib(n) {
    function f(num) {
        if(num === 0) { return 0;}
        if(num === 1) { return 1;}
        if(num === 2) { 
            return [1, 1];
        } else {
            let arr = recursiveFibonacci(num -1);
            arr.push( arr[arr.length-1] + arr[arr.length-2]);
            return arr.slice(arr.length-2);
        }
    }
    return f(n).pop();
}
console.log(fib(4)); // 1, 1, 2, 3 = 3 sum = 7;
// 3 2   (num-1) (num-2)
function iterativeFibonacci(num) {
    let num1 = 1;
    let num2 = 1;
    let arr = [1, 1];
    for(let i =2; i < num; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    console.log(arr);
    
}
iterativeFibonacci(10);
function recursiveFibonacci(num) {
    if(num === 0) { return 0;}
    if(num === 1) { return 1;}
    if(num === 2) { 
        return [1, 1];
    } else {
        let arr = recursiveFibonacci(num -1);
        arr.push( arr[arr.length-1] + arr[arr.length-2]);
        return arr;
    }
}
console.log(recursiveFibonacci(10));
 

function fibonacci(n){
    if (n <= 2) 
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(4));
