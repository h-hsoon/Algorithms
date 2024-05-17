// 3rd Highest Number in Array
// declar functipn 
// dclar three varibls 
// use for loop to iterate through array
// use if statement to check if the current element is greater than the first highest number
// if the condtion is true we asin the valuo to the 3th to the 2th and the 2th to the !1th and the index valuo to the 1th. 
// false use if statement to check if the current element is greater than the second highest number
// if the condtion is true we asin the valuo to the 3th to the 2th and the index valuo to 2th.
// false use if statement to check if the current element is greater than the third highest number
// if the condtion is true we asin the valuo of the index to the 3th.
// return the 3th highest number in the array.
function thirdHighest (input){
    var first =0;
    var second =0;
    var third=0;
    
    for(var i =0; i<input.length; i++){
        if (input[i] > first){
            third = second;
            second = first;
            first = input[i];
        }
        else if (input[i] > second) {
            third = second;
            second = input[i];  
        }
        else if (input[i] > third) {
            third = input[i];
        }
    }
    return third;
}
console.log(thirdHighest([2,5,3,1,4]));