class Solution(object):
    def removeElement(self, nums, val):
        length = 0
        for i in reversed(range(len(nums))):
            if nums[i] == val:
                nums.pop(i)
                nums.append('_')

        if '_' in nums:
            length = nums.index('_')
        else:
            length = len(nums)
        
        return length

             