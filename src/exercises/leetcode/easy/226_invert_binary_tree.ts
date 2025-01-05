// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

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

let tree = new TreeNode(
  5,
  new TreeNode(2, new TreeNode(1), new TreeNode(4)),
  new TreeNode(10)
);
//      5
//   2    10
// 1  4
invertTree(tree);

// 3 ways of traversing a tree
// root, left, right

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let inv = new TreeNode(root.val);
  function insert(inv: TreeNode | null, node: TreeNode | null) {
    if (!node || !inv) return;
    if (node.left) {
      inv.right = new TreeNode(node.left.val);
    }
    if (node.right) {
      inv.left = new TreeNode(node.right.val);
    }
    insert(inv?.left, node?.right);
    insert(inv?.right, node?.left);
  }
  insert(inv, root);
  return inv;
}
