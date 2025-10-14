class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        from collections import defaultdict
        
        def buildGraph(edges):
        # Build adjacency list
            graph = defaultdict(list)
            for u, v in edges:
                graph[u].append(v)
                graph[v].append(u)
            return graph
        def explore(graph, source, destination,visited):
            if source == destination:
                return True
            if source in visited:
                return False
            visited.add(source)
            for neighbor in graph[source]:
                if explore(graph, neighbor, destination,visited):
                    return True
            return False
        graph = buildGraph(edges)
        visited = set()
        return explore(graph,source , destination,visited)
          
      
       
        