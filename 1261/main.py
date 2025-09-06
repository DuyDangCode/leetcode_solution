# Definition for a binary tree node.
from typing import Optional, Set


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def travesal(root: Optional[TreeNode], x: int, y: int, node_set: set):
    if root is None:
        return
    root.val = 2 * x + y
    node_set.add(root.val)
    print("helo")

    travesal(root.left, root.val, 1, node_set)
    travesal(root.right, root.val, 2, node_set)


def print_tree(root, level=0, prefix="Root: "):
    if root is not None:
        print(" " * (level * 4) + prefix + str(root.val))
        print_tree(root.left, level + 1, "L--- ")
        print_tree(root.right, level + 1, "R--- ")


class FindElements:
    def __init__(self, root: Optional[TreeNode]):
        self._root = root
        self._set = set()
        travesal(self._root, 0, 0, self._set)

    def find(self, target: int) -> bool:
        return target in self._set


# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)


if __name__ == "__main__":
    root = TreeNode(-1)  # Node gốc
    root.left = TreeNode(-1)  # Node con trái
    root.right = TreeNode(-1)  # Node con phải
    root.left.left = TreeNode(-1)  # Con trái của node trái
    root.left.right = TreeNode(-1)  # Con phải của node trái
    obj = FindElements(root)
    print_tree(root)
    print(obj.find(1))
    print(obj.find(3))
    print(obj.find(5))
