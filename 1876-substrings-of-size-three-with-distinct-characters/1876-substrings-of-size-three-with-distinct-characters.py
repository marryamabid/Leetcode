class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        count = 0
        for i in range(len(s) - 2):
            substr = s[i:i+3]
            if len(set(substr)) == 3:
                count += 1
        return count
        