/* Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges. 

1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result.
*/

function GradeCalc(score){
    switch (true) {
        case (score > 90 && score <= 100):
            console.log("Grade A")
            break;
        case (score > 70 && score <= 90):
            console.log("Grade B")
            break;
        case (score > 50 && score <= 70):
            console.log("Grade C")
            break;
        default:
            console.log("Invalid score");
            
            break;
    }
}

GradeCalc(85);
GradeCalc(35);
GradeCalc(100);
