// 1. Print 1 - 135
console.log('algorithm 1');
for (let i = 1; i <= 135; i++){
    console.log(i);   
}

// 2. Print Odd Numbers 1 - 135
console.log('algorithm 2');
for (let i = 1; i <= 135; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 3. Sum of Printed Numbers
console.log('algorithm 3');
let sum = 0;
for (let i = 0; i <= 135; i++){
    sum += i;
    console.log(`Number is: ${i} Sum: ${sum}`);
}

// 4. Print the elements of an array
console.log('algorithm 4');
let array = [1,2,3,4,5,6]
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// 5. Find Max
console.log('algorithm 5');
let array1 = [1,4,3,2,5,6,0,-1,7,-5,11,18,-6,-2]
let max = array1[0];
for (let i = 0; i < array1.length; i++){
    if (array1[i] > max) {
        max = array1[i];
    }
}
console.log(max);

// 6. Get Average
console.log('algorithm 6');
let array2 = [2,3,1]
let average =0;
for (let i = 0; i < array2.length; i++){
    average += array2[i];
}
average = average / array2.length;
console.log(average);

// 7. Eliminate the Negatives
console.log('algorithm 7');
let array3 = [1,4,3,2,5,6,0,-1,7,-5,11,18,-6,-2]
for (let i = 0; i < array3.length; i++){
    if (array3[i] < 0) {
        array3[i] = 0;
    }
}
console.log(array3);

// 8. Number to String
console.log('algorithm 8');
let array4 = [1,4,3,2,5,6,0,-1,7,-5,11,18,-6,-2]
for (let i = 0; i < array4.length; i++){
    if (array4[i] < 0) {
        array4[i] = 'Turing';
    }
}
console.log(array4);