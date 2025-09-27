class Solution:
    def rob(self, nums: List[int]) -> int:
        def rob_linear(nums):
            rob1, rob2 = 0, 0  
            for n in nums:
                newRob = max(rob1 + n, rob2)
                rob1 = rob2
                rob2 = newRob
            return rob2

        n = len(nums)
        if n == 1:  
            return nums[0]

       
        return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))
        