from collections import Counter
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1Count = Counter(s1)
        left = 0
        for right in range(len(s1),len(s2)+1):
            if s1Count == Counter(s2[left:right]):
                return True
            else:
                left +=1
        return False