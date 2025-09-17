class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        memo={0:0}
        def f(n):
            if n in memo:
                return memo[n]

            minValue = float("inf")
            for c in coins: 
                remainder = n-c
                if remainder<0:
                    continue

                minValue = min(minValue,1 + f(remainder))
            if minValue != float("inf"):
                memo[n] = minValue
            else:
                memo[n] = float("inf")
            return memo[n]
        result = f(amount)
        if result == float("inf"):
            return -1
        else:
            return result