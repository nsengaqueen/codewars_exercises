function removeDuplicate(arr){
   
    for (i=0;i<arr.length;i++){
        for(const num of arr){
            if(arr[i]===num){
                 arr.filter(arr[i])

            }


        }
      
    }
return arr
}
let arr = [1,4,57,8,4,1]
console.log(removeDuplicate(arr))