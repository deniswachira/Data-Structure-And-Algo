// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.



// Example 2:
// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function goodNodes(root) {
    function dfs(node, maxVal) {
        if (!node) {
            return 0;
        }
        let count = 0;
        if (node.val >= maxVal) {
            count++;
            maxVal = node.val;
        }
        count += dfs(node.left, maxVal);
        count += dfs(node.right, maxVal);

        return count;
    }

    return dfs(root, Number.NEGATIVE_INFINITY);
}


// implementation 
let good = 0;
function trav(node, max) {
    if (!node) return;
    if (node.val >= max) ++good;
    max = Math.max(max, node.val);
    trav(node.left, max);
    trav(node.right, max);
}
trav(root, root.val);
return good;

// Example usage:
// Construct a binary tree
//        3
//       / \
//      1   4
//     / \   \
//    3   5   7
const tree = new TreeNode(3);
tree.left = new TreeNode(1, new TreeNode(3), new TreeNode(5));
tree.right = new TreeNode(4, null, new TreeNode(7));

const result = goodNodes(tree);
console.log(result);  // Output: 3


// Constraints:

// The number of nodes in the binary tree is in the range [1, 10^5].
// Each node's value is between [-10^4, 10^4].

// Explanation !!!!!!

// The provided JavaScript code defines a binary tree and a function to count the number of "good" nodes
// in that tree. A "good" node is defined as a node that is the maximum value from the root to that node.

// The TreeNode class is a basic binary tree node class. It has a constructor that takes a value and
// optional left and right children. The value of the node is stored in this.val, and the left and right
// children are stored in this.left and this.right, respectively.

// The goodNodes function is the main function that counts the number of good nodes in a binary tree.
//  It takes the root of the tree as an argument. Inside this function, a helper
//  function dfs (depth-first search) is defined. This function takes a node and a maximum
//  value as arguments.

// The dfs function first checks if the node is null. If it is, it returns 0 because a null
// node cannot be a good node. If the node is not null, it initializes a count variable to keep
// track of the number of good nodes.

// The function then checks if the value of the node is greater than or equal to the maximum
// value. If it is, it increments the count and updates the maximum value to the value of the
// node. This is because the node is a good node, and it could potentially be the maximum value for
// its children.

// The function then recursively calls itself on the left and right children of the node, adding
// the number of good nodes in the subtrees to the count. The maximum value is passed to these recursive
// calls to keep track of the maximum value on the path to the current node.

// Finally, the function returns the count, which represents the total number of good nodes in the
// tree rooted at the given node.

// The goodNodes function calls the dfs function on the root of the tree, passing Number.NEGATIVE_INFINITY
//  as the initial maximum value. This is because any value in the tree will be greater than this initial
//  maximum value. The function then returns the number of good nodes in the tree.