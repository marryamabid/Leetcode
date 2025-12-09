class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        netGain = 0
        maxElem = 0
        for n in range(len(gain)):
            netGain =  netGain + gain[n]
          
            if maxElem < netGain:
                maxElem =  netGain
        return maxElem 