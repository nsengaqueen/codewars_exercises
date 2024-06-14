// use lastIndexOf and indexOf. Elements that repeated themselves their lastIndexOf and indexOf are different while those that don't repeat themselves their lastIndexOf and indexOf are the same.

// // convert the string into an array using split // filter elements basing on the lastIndexOf and indexOf. //NB: elements that dont repeat themselves their lastIndexOf is equal to their indexOf   return str.split('').filter(ele => str.lastIndexOf(ele) !== str.indexOf(ele)).join('')
function duplicateCount(text){
  //...
  let count = 0
  for (let i = 0; i < text.length; i++) {

    for (let j = 1; j < text.length; j++) {
      if (text[0] === text[1] ){
         count++
      }
     
      
    }
}
}


  console.log(findOdd(1234));









  

