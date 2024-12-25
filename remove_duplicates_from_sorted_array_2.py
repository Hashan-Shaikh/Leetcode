class Solution(object):
    def removeDuplicates(self, nums):
        length = 0
        i = len(nums) - 1
        j = i - 1
        k = j - 1
        while k >= 0:
            if(nums[i] == nums[j]):
                if(nums[j] == nums[k]):
                    nums.pop(i)
                    nums.append('_')
            i -= 1
            j -= 1
            k -= 1
        
        if '_' in nums:
            length = nums.index('_')
        else:
            length = len(nums)
        
        return length
        