class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False


class Solution:
    def longestWord(self,words):
        root = TrieNode()
        for w in words:
            node = root 
            for ch in w:
                if ch not in node.children:
                    node.children[ch] = TrieNode()
                node = node.children[ch]
            node.end = True
        self.answer = ""
        def dfs (node,path):
            if (len(path) > len(self.answer)) or \
                 len(path) == (len(self.answer) and path  < self.answer):
                self.answer = path
            for ch in sorted(node.children.keys()):
                child = node.children[ch]
                if child.end:
                    dfs(child,path+ch)
        dfs(root,"")
        return self.answer
        