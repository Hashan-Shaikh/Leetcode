class Solution(object):
    def twoSum(self, nums, target):
        numsDict = {}
        indices = None
        complement = 0
        
        for i in range(len(nums)):
            complement = target - nums[i]
            if(nums[i] in numsDict):
                indices = [numsDict[nums[i]], i]
                break
            numsDict[complement] = i
        
        return indices
        