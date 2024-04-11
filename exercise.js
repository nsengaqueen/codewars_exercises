// String Compression
// You are given a string containing only uppercase letters. Your task is to implement a 
// function called compressString that compresses the string by counting the consecutive 
// occurrences of each letter and returning a new compressed string.
// The compressed string should consist of each letter followed by its count. 
// If a letter appears only once consecutively, you should include the count.

// Example: 
// compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
// compressString("XYZ

function compressString(str){
    var newString=[];
    let count = 0
    let result = 0
    for(var i=0;i<=str.length;i++){
        str[i]==str[i+1]? str[i]:newString.push(str[i]); 
     result=count++

        }
        return newString;
      
    }
    var str ="AVFFVVG";
    console.log(compressString(str));