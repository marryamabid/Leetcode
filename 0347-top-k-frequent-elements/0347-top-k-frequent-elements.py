class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        import heapq

    # Step 1: Count frequencies
        freq_map = Counter(nums)
    
    # Step 2: Create a min heap
        heap = []
    
        for num, freq in freq_map.items():
            heapq.heappush(heap, (freq, num))  # push tuple (frequency, number)
        
        # Keep heap size <= k
            if len(heap) > k:
                heapq.heappop(heap)
    
    # Step 3: Extract elements (ignore frequencies)
        result = [num for freq, num in heap]
        return result
