// 1. Addition
console.log('1. Addition');
let sum = 0 ;
for (let i = 200; i <= 2700; i++){
    sum = !(i%3 == 0 && i%5 == 0) && (i%3 == 0 || i%5 == 0)  ? sum +=i : sum += 0 ;
}
console.log(sum);

// 2. Shift the Values
console.log('2. Shift the Values');
let array = [2, 1, 6, 4, -7];
for (let i = 0; i < (array.length/2); i++){
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}
console.log(array);


// 3. FizzBuzz
console.log('3. FizzBuzz');
let array2 = [];
for (let i = 1; i <= 135; i++) {
    (i % 3 == 0 && i % 5 == 0) ? array2.push('FizzBuzz') : (i % 3 == 0) ? array2.push('Fizz') : (i % 5 == 0) ?  array2.push('Buzz') : array2.push(i);
}
console.log(array2);


// 4. Fibonacci
console.log('4. Fibonacci');
let Fibonacci = [0, 1];
for (let i = 2; i < 1000000; i++) {
    Fibonacci.push(Fibonacci[Fibonacci.length-2] + Fibonacci[Fibonacci.length-1]);
}
console.log(Fibonacci);

// 5. Remove the Negative
console.log('5. Remove the Negative');
let array3 = [1,-2,4,1,-3];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] < 0) {
        array3.splice(i, 1);
    }
}
console.log(array3);

// 6. Communist Censorship
console.log('6. Communist Censorship');
let array4 =  ['Man', 'I','Love','The','Matrix','Program'];
for (let i = 0; i < array4.length; i++) {
    if (array4[i] == 'Program') {
        let str = ''
        for (let j = 0; j < array4[i].length; j++){
            str +='*'
        }
        array4[i] = str;
    }
}
console.log(array4);