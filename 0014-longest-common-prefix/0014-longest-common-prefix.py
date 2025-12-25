class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""
        
        prefix = strs[0]
        
        for s in strs[1:]:
            while not s.startswith(prefix):
                prefix = prefix[:-1]  # remove the last character
                if prefix == "":
                    return ""
        return prefix

        