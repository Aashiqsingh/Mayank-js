var a = parseInt(prompt("Enter first number :"))
var b = parseInt(prompt("Enter second number :"))


var choice = parseInt(prompt("Press 1 for addition \npress 2 for subtraction \npress 3 for multiplication \npress 4 for division \n\n\n Enter your choice:"))

switch(choice)
{
    case 1: var add = a + b;
            console.log("Addition = ",add);
            break;

    case 2: var sub = a - b;
            console.log("Subtraction = ",sub);
            break;
            
    case 3: var mul = a * b;
            console.log("Multiplication = ",mul);
            break;

    case 4:var div = a / b;
            console.log("Division = ",div);
            break;
        
    default: console.log("Invalid choice!");

}




// var sub = a - b;
// console.log("Subtraction = ",sub);

// var mul = a * b;
// console.log("multiplication = ",mul);

// var div = a / b;
// console.log("Division = ",div);
