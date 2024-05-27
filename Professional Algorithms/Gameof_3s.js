const GameOfThree = (number) => {
    while (number != 1){
    if (number % 3 === 0) {
        console.log(`${number} 0`);
        number = number/3;
    }else if (number % 3 === 1){
            console.log(`${number} -1`);
            number = number - 1;
            number/=3;
    } else if(number % 3 === 2){
            console.log(`${number} +1`);
            number = number + 1;
            number /= 3;
    }
    }
    return console.log(number);
}

GameOfThree(100);