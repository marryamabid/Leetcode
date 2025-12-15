
class Solution:
    def findAllConcatenatedWordsInADict(self, words):
        wordSet = set(words)

        def dfs(word):
            for i in range(1,len(word)):
                prefix = word[:i]
                suffix = word[i:]
                if ((prefix in wordSet and suffix in wordSet) or
                    prefix in wordSet and dfs(suffix)):
                    return True
            return False

        res = []
        for w in words:
            if dfs(w):
                res.append(w)
        return res
