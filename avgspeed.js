function calculateSpeed(distance, time) {
    
    let Dvalue = parseInt(distance);
    let Tvalue = parseInt(time);
    
    let Dunit = distance.replace(/[\d\.\s]/g, ''); 
let Tunit = time.replace(/[\d\.\s]/g, '');

    
    
    if (Dunit === "km") {
        Dvalue *= 1000; 
    }
    
    
    if (Tunit === "min") {
        Tvalue *= 60; 
    }
    
   
    let speed = Dvalue / Tvalue;
    
   
    let newspeed = speed * 2.23694; 
    
    
    return Math.round(newspeed) + "mph";
}


console.log(calculateSpeed("3km", "5min"));  
console.log(calculateSpeed("500m", "45s"));  


// another way:

function calculateSpeed(distance, time) {
   
    let Newd = parseInt(distance);
    let Newt = parseInt(time);
   

    if (distance.endsWith("km")) {
        Newd *= 1000;
    }

    
    if (time.endsWith("min")) {
        Newt *= 60;
    }

  
    return Math.round((Newd / Newt) * 2.23694) + "mph";
}
