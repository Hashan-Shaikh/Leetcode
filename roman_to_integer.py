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
        
        for index,value in enumerate(s):
            if index == 0:
                sum += romanDict[value]
            else:
                if (value=='V' or value=='X') and (s[index - 1] == "I"):
                    sum += romanDict[value] - 2
                 
                elif (value=='L' or value=='C') and (s[index - 1] == "X"):
                    sum += romanDict[value] - 20

                elif (value=='D' or value=='M') and (s[index - 1] == "C"):
                    sum += romanDict[value] - 200
                
                else:
                    sum += romanDict[value]

        return sum

        