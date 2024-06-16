function duplicatesEncode(word){
    word = word.toLowerCase()
   return word.replace(/./g, m => word.indexOf(m) === word.lastIndexof(m) ? ')' : '(')
}