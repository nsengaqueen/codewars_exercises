function evenOrOdd(n) {
    if(typeof n === 'number'){
     return n % 2 === 0 ? "Even" : "Odd";
    }
    if (typeof n === 'object'){
   
      // Check if the number is even or odd

      for (let i = 0; i < array.length; i++) {
        if (array % 2 === 0 || array[i] % 2 === 0) {
          return "Even";
        } else {
          return "Odd";
        }
      }
    }
     
  
    
}

console.log(evenOrOdd(1));