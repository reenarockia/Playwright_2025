/* Learn if-else and switch case 
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 

Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript */

function launchBrowser(browserName){
    if (browserName === "Chrome") {
        console.log("Chrome Browser");
    } else if(browserName === "Edge"){
        console.log("Edge Browser");
    } else {
        console.log("Other than chrome or Edge");
    }
}

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Running "+ testType +" testing");
            break;
        case "sanity":
            console.log("Running "+ testType +" testing");
            break;
        case "regression":
            console.log("Running "+ testType +" testing");
            break;
    
        default:
            console.log("Running smoke testing by default");
            break;
    }
}

launchBrowser ("Chrome");
runTests("regression");
runTests();