
function printOddNumber(){
    // Runs until the range is met
    for (let n = 0; n < 25; n++) {
        if (n%2 != 0) {
            console.log (n);
        }
        
    }
}

function printSomeNumber(){
    let count =10;
    //runs as long as the condition is true
    while (count>=5){
        console.log(count);
        count--;
    }

} 

    function printSomeValue(){
    num = 10;

    do {
       console.log(num);
       num--;
    } while (num <= 8);
}

    function printVotiningEligibility(){
        let age = 20;
        //ternary operator

        let message = age >=18? "You can Vote": "You can't vote"
        console.log(message);
        

    }
printVotiningEligibility();

//printOddNumber();
//printSomeNumber();
//printSomeValue();
