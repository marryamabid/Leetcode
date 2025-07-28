class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        senate = list(senate)
        d,r = deque(), deque()

        for i, n in enumerate(senate):
            if n == 'D':
                d.append(i)
            else:
                r.append(i)
        while d and r:
            dTurn = d.popleft()
            rTurn = r.popleft()
            if dTurn < rTurn:
                d.append(dTurn + len(senate))
            else:
                r.append(rTurn + len(senate))
        return "Radiant" if r else "Dire"