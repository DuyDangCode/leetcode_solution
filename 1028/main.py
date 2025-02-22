from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def recoverFromPreorder(self, traversal: str) -> Optional[TreeNode]:
        stack = []
        index = 0

        while index < len(traversal):
            depth = 0

            while index < len(traversal) and traversal[index] == "-":
                depth += 1
                index += 1

            value = 0
            while index < len(traversal) and traversal[index].isdigit():
                value = value * 10 + int(traversal[index])
                index += 1

            new_node = TreeNode(value)

            while len(stack) > depth:
                stack.pop()

            if stack:
                if stack[-1].left is None:
                    stack[-1].left = new_node
                else:
                    stack[-1].right = new_node
            stack.append(new_node)
        return stack[0]


if __name__ == "__main__":
    print("Hello")
    solution = Solution()
    solution.recoverFromPreorder("1-401--349---90--88")
