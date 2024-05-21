// function takes a string as a parameter
// define a varible hod the string changed to array
// define a variable to hold the word lendth
// loop through the array
// if condition to check the word length
// true assin the woed length to the variable
// return the variable

let longestWordInString = (str) => {
    const words = str.split(' ');
    let longestWordLength = words[0].length;
    for (let i =1; i < words.length; i++){
        if (words[i].length > longestWordLength){
            longestWordLength = words[i].length;
        }
    }
    return longestWordLength;
}

console.log(longestWordInString('my name is hanna'));