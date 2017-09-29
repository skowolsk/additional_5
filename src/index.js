module.exports = function check(str, bracketsConfig) {
    let temp = str.split('');
    let check = bracketsConfig;
    let array = [];


    for(let i = 0; i < temp.length; i++){
        for(let j = 0; j < check.length; j++){
            if (!(temp[i] === check[j][1] && array[array.length - 1] === check[j][0])) {
                if (temp[i] === check[j][0])
                    array.push(str[i]);
            } else array.pop();
        }
    }

    if (temp.length % 2 !== 0){
        return false;
    }
    if(array.length === 0){
        return true;
    }
    else{
        return false;
    }

};
