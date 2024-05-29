//Sum All Odd Fibonacci
// function to create the fibonacci array
function fibonacci(num){
    let fibArray = [1,1];
    for (let i = 2; i <num; i++){
        fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray;
}

// function to get the sum of the odd fibonacci number
const sumAllOddFibonacci = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            sum += array[i]
        }
    }
    return sum;
}
const arr = fibonacci(6)

console.log(sumAllOddFibonacci(arr));