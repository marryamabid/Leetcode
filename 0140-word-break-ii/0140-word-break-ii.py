class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        wordSet = set(wordDict) #no duplicate
        memo = {}

        def backtrack(i):
            if i == len(s):
                return [""]
            if i in memo:
                return memo[i]
            res = []
            for j in range(i,len(s)):
                w = s[i:j+1]
                if not w in wordSet:
                    continue
                string = backtrack(j+1)
                if  not string:
                    continue
                for substr in string:
                    sentence = w
                    if substr:
                        sentence += " " + substr
                    res.append(sentence)
            memo[i] = res
            return res
        return backtrack(0)