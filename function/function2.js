function arts(name){
    return name + " Your addmission confirm in arts stream";
}


function commerce(name){
    return name + " Your addmission confirm in commerce stream";
}

function science(name){
    return name + " Your addmission confirm in science stream";
}

var per = 48;
var fname = "Hetvi";

var flag;

if(per > 90){
    flag = science(fname)
}
else if(per > 70){
    flag = commerce(fname)
}
else if(per > 50){
    flag = arts(fname)
}
else{
    console.log("fail...");
    
}

console.log(flag);
