class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()  # Step 1: sort to handle duplicates
        used = [False] * len(nums)

        def backtrack(path):
            # Base case: if path is a complete permutation
            if len(path) == len(nums):
                res.append(path[:])
                return

            for i in range(len(nums)):
                # Skip if already used
                if used[i]:
                    continue

                # Skip duplicates: if the current num is same as previous AND previous wasn’t used
                if i > 0 and nums[i] == nums[i-1] and not used[i-1]:
                    continue

                # Choose
                used[i] = True
                path.append(nums[i])

                # Explore
                backtrack(path)

                # Unchoose (backtrack)
                path.pop()
                used[i] = False

        backtrack([])
        return res

        