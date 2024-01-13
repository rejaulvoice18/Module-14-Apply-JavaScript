// var i = 1;
// var factorial = 1;
// while(i<=10){
//     factorial = factorial * i;
//     // console.log(i,factorial);
//     i++;
// }

// console.log(factorial);

function factorialWhile(n){
    var i = 1;
    var factorial = 1;
    while(i<=n){
        factorial = factorial * i;
        // console.log(i,factorial);
        i++;
    }
    return factorial;
}

var result = factorialWhile(20);
console.log(result);

