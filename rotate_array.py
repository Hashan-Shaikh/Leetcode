class Solution(object):
    def rotate(self, nums, k):
        lengthOfList = len(nums)
        if k > lengthOfList:
            k = k % lengthOfList
        startIndex = lengthOfList - k
        list2 = nums[startIndex:lengthOfList]
        list2.extend(nums[0:startIndex])
        nums[:] = list2
        return nums
        