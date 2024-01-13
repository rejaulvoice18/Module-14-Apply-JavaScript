function fiboSeries(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else {
        // Calculate in a array with nth element.
        // 5-1 = 4
        // (4-1 = 3) + (4-2 = 2) = 5
        // 4 - 1 = 3
        // (3-1 = 2) + (3-2 = 1) = 3
        // 3 - 1 = 2 
        // (2-1 = 1) + (2-2 = 0) = 1
        // 4 -1 = 3 + 4-2 = 2 (3+2 = 5);
        // 5, 
        // 4-1 = 3
        // 3-1 =2 + 3- 2 = 1 (2 + 1 = 3) 
        // 3 - 1 = 2
        // 2 - 1 =1 , 2 -2 = 0

        var fibo = fiboSeries(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fiboSeries(5);
console.log(result);