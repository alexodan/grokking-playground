// 100. Same Tree
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (p?.val !== q?.val) return false;
  return isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right);
}

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

let tree1 = new TreeNode(
  5,
  new TreeNode(2, new TreeNode(1), new TreeNode(4)),
  new TreeNode(10)
);

let tree2 = new TreeNode(
  5,
  new TreeNode(2, new TreeNode(1), new TreeNode(4)),
  new TreeNode(10)
);

isSameTree(tree1, tree2);
