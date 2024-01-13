function checkPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "Not a prime number";
        }
    }
    return "Your number is prime number";
}

// A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. 
//A natural number greater than 1 that is not prime is called a composite number. For example, 
//5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself. However, 
//4 is composite because it is a product (2 × 2) in which both numbers are smaller than 4. 


var result = checkPrime(15);
console.log(result);