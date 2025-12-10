class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False


class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self,word):
        curr = self.root
        for ch in word:
            if ch not in curr.children:
                curr.children[ch] = TrieNode()
            curr = curr.children[ch]
        curr.end = True
    def getRoot(self,word):
        curr = self.root
        prefix=""
        for w in word:
            if w not in curr.children:
                return word
            curr = curr.children[w]
            prefix += w
            if curr.end:
                return prefix
        return word


        

class Solution:
    def replaceWords(self, dictionary, sentence):
        curr = Trie()
        for word in dictionary:
           
            trie = curr.insert(word)
        res = []
        for word in sentence.split():
            res.append(curr.getRoot(word))
        return " ".join(res)