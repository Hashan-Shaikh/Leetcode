class Solution(object):
    def strStr(self, haystack, needle):
        if len(needle) == 0 or needle == "" or len(needle) > len(haystack):
            return -1
        for i in range(len(haystack) + 1 - len(needle)):
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1 