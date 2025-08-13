class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        hashSet = set()
        for i in range(len(s)-k+1):
            hashSet.add(s[i:i+k])
        return len(hashSet) == 2 **k
