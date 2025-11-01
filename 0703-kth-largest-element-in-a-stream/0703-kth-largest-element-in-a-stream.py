class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.min_heap = nums
        heapq.heapify(self.min_heap)  # Convert nums into a min heap

        # Keep only the k largest elements
        while len(self.min_heap) > k:
            heapq.heappop(self.min_heap)

        def add(self, val: int) -> int:
            heapq.heappush(self.min_heap, val)  # Add new element
            if len(self.min_heap) > self.k:
                heapq.heappop(self.min_heap)    # Keep only k elements
        return self.min_heap[0]   
        


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)