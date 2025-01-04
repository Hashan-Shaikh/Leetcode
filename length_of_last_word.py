class Solution(object):
    def lengthOfLastWord(self, s):
        tokens = s.split()
        last_token = tokens[len(tokens) - 1]
        return len(last_token)
        