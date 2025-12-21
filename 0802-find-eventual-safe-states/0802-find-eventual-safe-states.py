from collections import deque

class Solution:
    def eventualSafeNodes(self, graph):
        n = len(graph)
        reverse = [[] for _ in range(n)]
        outdegree = [0] * n

    
        for u in range(n):
            outdegree[u] = len(graph[u])
            for v in graph[u]:
                reverse[v].append(u)

        queue = deque()
        for i in range(n):
            if outdegree[i] == 0:
                queue.append(i)

        safe = [False] * n

        while queue:
            node = queue.popleft()
            safe[node] = True
            for prev in reverse[node]:
                outdegree[prev] -= 1
                if outdegree[prev] == 0:
                    queue.append(prev)

        return [i for i in range(n) if safe[i]]
