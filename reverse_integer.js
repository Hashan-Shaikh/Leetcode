/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minInt32 = -(2**31);
    let maxInt32 = 2**31 - 1;
    let remainder = 0;
    let result = "";
    let preserveMinus = false;

    if(x < 0){
        preserveMinus = true;
        x = x * -1;
    }

    while(x >= 10){
        remainder = x % 10;
        result += String(remainder);
        x = Math.floor(x / 10);
    }

    result += String(x);
    result = Number(result);
    
    if(preserveMinus == true){
        result = result * -1;
    }

    if(result < minInt32 || result > maxInt32){
        return 0;
    }

    return result;

};