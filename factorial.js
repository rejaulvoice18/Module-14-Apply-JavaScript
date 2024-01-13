// var factorial = 1;
// for(var i = 1; i <= 10; i++){
//     factorial = factorial*i;
//     console.log(i, factorial);
// }

// factorial using function
// 5!= 5x4! = 5 x 4 x 3 x 2 x 1=120

function factorial(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial*i;
    }
    return factorial;
}

console.log(factorial(5));