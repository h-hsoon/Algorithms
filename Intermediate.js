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

