class Solution(object):
    def isSubsequence(self, s, t):
        i = 0
        j = 0
        n = len(s)
        count = 0

        if s == "": return True
        
        while i < len(t):
            if j == len(s):
                break
            elif s[j] == t[i]:
                i += 1
                j += 1
                count += 1
            else:
                i += 1

        if count == n:
            return True
        else:
            return False

        