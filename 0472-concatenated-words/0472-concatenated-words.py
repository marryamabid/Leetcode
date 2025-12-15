class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.end = True


class Solution:
    def findAllConcatenatedWordsInADict(self, words):
        trie = Trie()
        words.sort(key=len) 
        result = []

        def canForm(word, start, count, memo):
            if start == len(word):
                return count >= 2

            if start in memo:
                return memo[start]

            node = trie.root
            for i in range(start, len(word)):
                ch = word[i]
                if ch not in node.children:
                    break
                node = node.children[ch]

                if node.end:
                    if canForm(word, i + 1, count + 1, memo):
                        memo[start] = True
                        return True

            memo[start] = False
            return False

        for w in words:
            if not w:
                continue
            memo = {}
            if canForm(w, 0, 0, memo):
                result.append(w)
            else:
                trie.insert(w)

        return result
