class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def backtrack(start, current, total):
            # If the total matches target → valid combination
            if total == target:
                res.append(current.copy())
                return
            
            # If total exceeds target → stop exploring
            if total > target:
                return

            # Explore all candidates starting from `start`
            for i in range(start, len(candidates)):
                current.append(candidates[i])
                backtrack(i, current, total + candidates[i])  # i, not i+1 (repetition allowed)
                current.pop()  # backtrack

        backtrack(0, [], 0)
        return res
