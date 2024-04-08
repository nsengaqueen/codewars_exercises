
function isPrime(n) 
{ 
    
    if (n <= 1) 
        return false; 
   
    
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 
   
    return true; 
} 

function oddNotPrime(x) {
    let count = 0;

    for (let i = 1; i <= x; i++) {
        if (i % 2 !== 0 && !isPrime(i)) { 
            count++; 
        }
    }

    return count;
}


console.log(oddNotPrime(5)); 

