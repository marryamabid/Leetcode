class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        if  k == len(nums):
            return sum(nums)/k
        maxNum = float('-inf')
        count = 0

        left = 0
        right = 0

        while right < len(nums):
            count += nums[right]
            if (right-left+1) == k:
                maxNum = max(maxNum,count)
                count -= nums[left]
                left += 1
            right +=1
        return maxNum/k
        