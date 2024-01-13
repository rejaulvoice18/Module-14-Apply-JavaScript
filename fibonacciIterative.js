//fibo[i] = fibo[i-1]+fibo[i-2]

function fibo(n){
    var fibo = [0,1];
    for(var i = 2; i<=n; i++ ){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibo(15);
console.log(result);

