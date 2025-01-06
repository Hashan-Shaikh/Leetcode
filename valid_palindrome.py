import re
class Solution(object):
    def isPalindrome(self, s):
        
        if s == " ":
            return True
        
        s = s.lower()
        cleaned_string = re.sub(r'[^a-z0-9]', '', s)

        i = 0
        j = len(cleaned_string) - 1

        while i < j:
            if cleaned_string[i] == cleaned_string[j]:
                i += 1
                j -= 1
            else:
                return False

        return True
        