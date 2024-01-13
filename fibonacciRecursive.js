// fibo[n] = fibo[n-1]+fibo[n-2]

function fibo(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibo(n-1)+fibo(n-2);
    }
}

var result = fibo(20);

console.log(result);

