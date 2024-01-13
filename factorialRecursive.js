// 6! = 1*2*3*4*5*6
// 7! = (7-1)!*7
// n! = (n-1)!*n
function facRecursie(n){
    if(n==0){
        return 1;
    }
    else{
        return n * facRecursie(n - 1);
    }
}

var result = facRecursie(0);
console.log(result);

function factorialRecursive(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorialRecursive(n - 1);
    }
}

var result2 = factorialRecursive(5);
console.log(result2)