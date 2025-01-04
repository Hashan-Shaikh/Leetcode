class Solution(object):
    def longestCommonPrefix(self, strs):
        lcp = ""
        count = 0
        min = float('inf')
        for word in strs:
            if len(word) < min:
                min = len(word)

        for index,char in enumerate(strs[0]):
            if index == min:
                break
            for i in range(len(strs)):
                if char == strs[count][index]:
                    count += 1
            if count == len(strs):
                lcp += char
            else:
                break
            count = 0

        return lcp