// Javascript bydefault -- single threded application
// callback :  

// Java -- multi threed application


function get(){
    console.log("welcome to get function...");
    
}


function demo(x){

    x()
    // console.log(x);
    
}

// demo(10)
// demo("ram")
// demo(12.55)
// demo(true)

demo(get)