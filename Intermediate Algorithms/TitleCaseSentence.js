let string = 'mE nAME is hanna';

function TitleCase(str){
    let array = str.toLowerCase().split(' ');
    for (let i = 0; i <array.length; i++){
        array[i] = array[i][0].toUpperCase()+array[i].slice(1);
    }
    return array.join(' ');
}

console.log(TitleCase(string));