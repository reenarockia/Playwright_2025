/*
Assignment Details:   
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
differently when printed.  
  
Assignment Requirements:   
1. Declare a const name as browserName (global)  
2. Assign value as Chrome  
3. Create a function by name getBrowserName  
4. Create if condition inside function to check if browser is chrome, then  
5. Declare a local variable (browserName) and print that variable inside function (outside block) 
6. Call that function from the javascript 


Variable Shadowing
-------------------
Shadowing happens when an inner scope declares a variable with the same name as one in an outer scope.

With let or const, the shadowed variable exists only inside that block.

With var, the scope is the entire function, so the behavior would differ.
*/
var browserName = "Chrome";

function getBrowserName() {
    if (browserName === "Chrome") {
        //var browserName = "Edge";
        let browserName = "Edge";
        console.log("Inside If block "+ browserName);
        
    }
    console.log("Outside If block "+ browserName);
}

getBrowserName();


