/*
Assignment Details:  
Given a string s consisting of words and spaces, return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. 
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 
 
Assignment Requirements:  
Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word. 
 
Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length 
 
 
 
 
Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result
*/

//To find the length of the last word in the given sentence
function findLastWordLength(str1){

    let words=str1.split(" ").filter(word => word !== ""); // split the statement in to words excluding spaces
    let NumberOfWords = words.length;
    let explanation = "The last word is \"" +words[NumberOfWords-1]+ "\" with length ";
    return explanation + words[NumberOfWords-1].length; // return length of the last word
}

function anagramCheck(word1, word2){
    let list1=word1.split("").sort().join("");
    let list2=word2.split("").sort().join("");
    if (list1 === list2){
        console.log(word1+" & "+word2+" are anagrams");
    } else {
        console.log(word1+" & "+word2+" are not anagrams");
    }
}
console.log(findLastWordLength("Hello World") );
console.log(findLastWordLength("   fly me   to   the moon  "));
anagramCheck("listen","silent");
anagramCheck("Hello","World");
