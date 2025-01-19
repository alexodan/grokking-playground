/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
      1
     / \
    2   3
   /     \
  4       5
 /         \
6           7
*/
function height(root: TreeNode | null): number {
  if (!root) return 0;
  let left = height(root.left) + 1;
  let right = height(root.right) + 1;
  return left > right ? left : right;
}
function isBalanced_mine(root: TreeNode | null): boolean {
  if (!root) return true;
  let left = height(root.left);
  let right = height(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

// Claude
function isBalanced(root: TreeNode | null): boolean {
  function checkHeight(node: TreeNode | null): number {
    if (!node) return 0;

    // Get left subtree height
    const left = checkHeight(node.left);
    if (left === -1) return -1; // Early return if unbalanced

    // Get right subtree height
    const right = checkHeight(node.right);
    if (right === -1) return -1; // Early return if unbalanced

    // Check if current node is balanced
    if (Math.abs(left - right) > 1) return -1;

    // Return height of current subtree
    return Math.max(left, right) + 1;
  }

  return checkHeight(root) !== -1;
}
