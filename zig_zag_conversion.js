/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let string = s.split("");
    let char;
    let row = 0;
    let result = Array(numRows).fill("");
    let flag = 'downwards';

    if(numRows == 1){
        return s;
    }

    while(string.length > 0){
        char = string.shift();

        result[row] += char;

        if(row < numRows && flag == 'downwards'){
            row = row + 1;
        }
        else if(flag == 'upwards'){
            row = row - 1;
        }
        
        if(row == numRows - 1){
            flag = 'upwards';
        }
        else if(row == 0){
            flag = 'downwards';
        }
        

    }

    return result.join("");
};
