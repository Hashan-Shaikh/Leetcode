/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let sum = 0;

    let sortedNums = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);

    while(i<j){
        sum = sortedNums[i].num + sortedNums[j].num;
        if(sum == target){
            return [sortedNums[i].index, sortedNums[j].index];
        }
        else if(sum < target){
            i+=1;
        }
        else{
            j-=1
        }
    }

    return [sortedNums[i].index, sortedNums[j].index];
}