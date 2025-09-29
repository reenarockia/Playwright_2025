/*
Assignment Details:  
Given the array, const nums = [2, 4, 7, 8, 11, 14];  
const target = 18; 
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5) 
 
Assignment Requirements:  
1. Initialize an empty array `results`. 
2. Use a nested loop to iterate over `nums` array elements. 
3. Check if the sum of two distinct elements equals `target`. 
4. If true, add their indices to `results`. 
5. Return `results` containing pairs of indices.
*/

function findSumOf2Elements(numList){
    const result = []; // Initialize an empty array `results`. 
    const target =18; // Setting target as 18
    for (let i = 0; i < numList.length; i++) { // Using nested loop to compare the consecutive array values
        for (let j = i+1; j < numList.length; j++) {
            const sum = numList[i]+numList[j]; // Adding the array elements
            if (sum === target){// Comparing the sum with target value
                result.push(`${numList[i]} + ${numList[j]} ( ${i},${j} )`); // expanding the result array with values that matches the criteria
            }        
        }
    
    }
return result; //returning the result
}

console.log(findSumOf2Elements ([2, 4, 7, 8, 11, 14])); // printing the outcome by calling the function with array passed.
