class Solution(object):
    def romanToInt(self, s):
        sum = 0
        romanDict = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        
        for i in range(len(s) - 1):
            if romanDict[s[i]] >= romanDict[s[i+1]]:
                sum += romanDict[s[i]]
            else:
                sum -= romanDict[s[i]]

        sum += romanDict[s[len(s) - 1]]
        return sum

        