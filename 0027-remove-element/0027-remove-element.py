class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0  # pointer for next position to insert non-val
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        return k
        