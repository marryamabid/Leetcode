class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        subset = []
        def backtrack(i):
            if i >= len(nums):
                res.append(subset.copy())
                return
            #decision to include:
            subset.append(nums[i])
            backtrack(i+1)
            #decision not to include:
            subset.pop()
            backtrack(i+1)
        backtrack(0)
        return res