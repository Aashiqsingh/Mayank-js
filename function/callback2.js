const singapore = (amt)=>{
    return "Your trip is confirmed in singapore with package "+amt
}

const paris = (amt)=>{
    return "Your trip is confirmed in paris with package "+amt
}

const goa = (amt)=>{
    return "Your trip is confirmed in goa with package "+amt
}

// cb -- callback 
const travel = (amount , cb)=>{

    var x = cb(amount)
    console.log(x);
    
}

var budget = 400;

if(budget > 1000){
    travel(budget,singapore)
}
else if(budget > 800){
    travel(budget, paris)
}
else if(budget > 500){
    travel(budget, goa)
}
else{
    console.log("You need more money...");
    
}