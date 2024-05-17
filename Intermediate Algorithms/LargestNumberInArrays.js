let maxNumberInArray = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let largestNumbersInArrays = (arrays) => {
    let largestNumbers = [];
    for (let j = 0; j < arrays.length; j++){
        largestNumbers.push(maxNumberInArray(arrays[j]));
    }
    return largestNumbers;
}

let arrs =[[1,2,5,3,67,5],[2,3,6,3,7,2,8],[3,1,5,2,6,3,63]];
console.log(largestNumbersInArrays(arrs));