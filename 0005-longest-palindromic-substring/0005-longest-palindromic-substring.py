class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        # helper function: expand around center
        def expandAroundCenter(l: int, r: int):
            nonlocal res, resLen
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = (r - l + 1)
                l -= 1
                r += 1

        for i in range(len(s)):
            # Odd length palindrome
            expandAroundCenter(i, i)
            # Even length palindrome
            expandAroundCenter(i, i+1)

        return res