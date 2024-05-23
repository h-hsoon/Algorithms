const SumAll = (array) =>{
    let sum = 0;
    let max ,min =0;
    if(array[0] > array[array.length-1]){
        max = array[0];
        min = array[array.length-1]
    } else {
        max = array[array.length-1];
        min = array[0];
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

const arr = [10,5];
console.log(SumAll(arr));