class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        window = set()
        left = 0

        for R in range(len(nums)):
            if R - left > k:
                window.remove(nums[left])
                left +=1
            if  nums[R] in window:
                return True
            window.add(nums[R])
        return False