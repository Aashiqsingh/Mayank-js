
// function keyword
// return : return 


// without return type without argument

function demo(){

    console.log("hello world...");
    
}

// demo()

// without return type with argument

function sum(a,b){
    console.log("Additon = ",a+b);
    
}

// sum(3,4)

// with return type without argument
function demo2(){

    return "with return type without argument";

}


// console.log(demo2());


// var x = demo2()
// console.log(x);

// With return type with argument

var x = parseInt(prompt("Enter first number"))
var y = parseInt(prompt("Enter second number"))
function mul(x,y){
    return x*y;

}

var x = mul(x,y)
console.log("Multiply = ",x);
