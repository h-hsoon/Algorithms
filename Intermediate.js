// 1. Addition
console.log('1. Addition');
let sum = 0 ;
for (let i = 200; i <= 2700; i++){
    sum = i%3 == 0 && i%5 == 0 ? sum += 0 :  i%3 == 0 || i%5 == 0  ? sum +=i : sum += 0 ;
}
console.log(sum);