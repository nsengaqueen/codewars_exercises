function add(arr) {
    let Sum = 0;
    let Sums = [];
  
    for (let num of arr) {
      Sum += num; 
      Sums.push(Sum);
    }
  
    return Sums; 
  }
  
  