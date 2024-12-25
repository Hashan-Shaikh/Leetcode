class Solution(object):
    def removeDuplicates(self, nums):
        length = 0
        index = len(nums) - 1
        while index - 1 >= 0:
            if(nums[index] == nums[index - 1]):
                nums.pop(index)
                nums.append('_')
            index -= 1
            
        if '_' in nums:
            length = nums.index('_')
        else:
            length = len(nums)
        
        return length

        