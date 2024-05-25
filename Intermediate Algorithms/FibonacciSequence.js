// Fibonacci Sequence
const fip = (indNum) => {
    let num = 1;
    let num1 = 0;
    let num2 = 0;
    for (let i = 2; i <= indNum; i++) {
        num2 = num1;
        num1 = num;
        num = num1 + num2;
    }
    return num;
}

console.log(fip(3));