function diff(a, b){
  //your code here
  let difference = [];
  
 
  for(let value of a){
     if (!b.includes(value)){
      difference.push(value)
    }
} 
      for (let character of b){
    if(!a.includes(character)){
      difference.push(character)
    }
}
   return [...new Set(difference.sort())];
  
      }

  

 console.log(diff([1, 2, 3], [2, 3, 4]));