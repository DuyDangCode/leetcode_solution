import java.util.HashSet;
import java.util.Stack;

class TreeNode {
	int val;
	TreeNode left;
	TreeNode right;

	TreeNode() {
	}

	TreeNode(int val) {
		this.val = val;
	}

	TreeNode(int val, TreeNode left, TreeNode right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

public class Solution {
	private boolean checkRelation(int valParent, int valChild, int[] postorder) {
		int posParent = -1, posChild = -1;

		for (var i = 0; i < postorder.length; i++) {
			if (postorder[i] == valChild) {
				posChild = i;
			} else if (postorder[i] == valParent) {
				posParent = i;
			}
			if (posParent != -1 && posChild != -1) {
				break;
			}
		}

		return posParent > posChild;
	}

	public TreeNode constructFromPrePost(int[] preorder, int[] postorder) {
		Stack<TreeNode> stack = new Stack<>();

		for (var i = 0; i < preorder.length; i++) {
			if (i == 0) {
				stack.push(new TreeNode(preorder[i]));
				continue;
			}
			if (stack.isEmpty()) {
				continue;
			}

			while (!checkRelation(stack.peek().val, preorder[i], postorder)) {
				stack.pop();
			}

			var currentNode = stack.peek();
			var newNode = new TreeNode(preorder[i]);

			if (currentNode.left == null) {
				currentNode.left = newNode;
			} else {
				currentNode.right = newNode;
			}
			stack.push(newNode);
		}

		while (stack.size() > 1) {
			stack.pop();
		}

		return stack.pop();
	}

	public static void main(String[] args) {

		try {
			var solution = new Solution();
			solution.constructFromPrePost(new int[] { 1, 2, 4, 5, 3, 6, 7 }, new int[] { 4, 5, 2, 6, 7, 3, 1 });
		} catch (Exception e) {
			System.err.println(e);
		}
	}
}
