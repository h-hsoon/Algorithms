// algorithm 1
// define a variable to set the array
// define a loop go thro the half of the array 
// define a variabl to hold the value fo the array element temporary
// swap the places of the array element
// print thr array

let array = [2, 1, 6, 4, -7];
for (let i = 0; i < (array.length/2); i++){
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}
console.log(array);

// algorithm 2
// define a variable to set the array
// define a loop go thro the half of the array 
// condition to check if the number is negative
// true delrte the number
// print thr array

let array2 = [1,-2,4,1,-3];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] < 0) {
        array2.splice(i, 1);
    }
}
console.log(array2);

// algorithm 3
// define a function take an array as parameter
// define a variable to hold the index of the min number in the array
// define a variable to hold the value fo the array element temporary
// define a loop go thro the array
// define a loop to do the comparision and find the min number in the array
// condition to check the min element 
// swap the places of the array element
// return the sorted array

function selectionSort(arr){
    let minIndex ;
    let temp ;
    for (let i = 0; i < arr.length; i++){
        minIndex = i ;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j ;

            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp ;
    }
    return arr
}
let array3 = [33,90,55,2,66,7,4,8,3,100,567]

console.log(selectionSort(array3));

// algorithm 4
const maxNumberInArray = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
const largestNumbersInArrays = (arrays) => {
    let largestNumbers = [];
    for (let j = 0; j < arrays.length; j++){
        largestNumbers.push(maxNumberInArray(arrays[j]));
    }
    return largestNumbers;
}

let arrays1 =[[1,2,5,3,67,5],[2,3,6,3,7,2,8],[3,1,5,2,6,3,63],[4,5,6,3,8,9,2,1,19,24]];
console.log(largestNumbersInArrays(arrays1));

// algorithm 5
let string = 'mE nAME is hanna';

function titleCase(str){
    let array = str.toLowerCase().split(' ');
    for (let i = 0; i <array.length; i++){
        array[i] = array[i][0].toUpperCase()+array[i].slice(1);
    }
    return array.join(' ');
}

console.log(titleCase(string));