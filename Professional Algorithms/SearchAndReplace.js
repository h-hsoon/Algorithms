// Search and Replace
function SearchAndReplace (string,befor,after){
    let array = string.trim().split(' ');
    for (let i = 0; i <array.length; i++){
        if (array[i].toLowerCase() === befor.toLowerCase()){
            if(array[i][0] == array[i][0].toUpperCase()){
                array[i] = after.charAt(0).toUpperCase() + after.slice(1);
            }else{
                array[i] = after;
            }
        }
    }
    return array.join(' ');
}

let hfh = "A quick brown fox jumped over the lazy dog".toUpperCase()

console.log(SearchAndReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));

