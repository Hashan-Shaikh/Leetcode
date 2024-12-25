/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let minInt32 = -(2**31);
    let maxInt32 = 2**31 - 1;
    let preserveMinus = false;
    let result= "";
    let char;
    let index = 0;

    s = s.trimStart(); 

    if(s.charAt(0) == '-'){
        preserveMinus = true;
        s = s.slice(1);
    }
    else if(s.charAt(0) == '+'){
        s = s.slice(1);
    }

    while(index < s.length){
        
        char = s.charAt(index);
        
        if(char >= '0' && char<='9'){
            result += char;
        }
        else{
            break;
        }
        
        index += 1;
    }

    result = Number(result);

    if(preserveMinus == true){
        result = result * -1;
    }

    if(result > maxInt32){
        return maxInt32;
    }
    else if(result < minInt32){
        return minInt32;
    }

    return result;

};
