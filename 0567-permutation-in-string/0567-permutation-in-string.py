class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        # Frequency arrays for s1 and sliding window in s2
        s1_count = [0] * 26
        s2_count = [0] * 26

        for ch in s1:
            s1_count[ord(ch) - ord('a')] += 1

        # First window
        for ch in s2[:len(s1)]:
            s2_count[ord(ch) - ord('a')] += 1

        if s1_count == s2_count:
            return True

        # Sliding window
        for i in range(len(s1), len(s2)):
            # Add new char
            s2_count[ord(s2[i]) - ord('a')] += 1
            # Remove old char
            s2_count[ord(s2[i - len(s1)]) - ord('a')] -= 1

            if s1_count == s2_count:
                return True

        return False
