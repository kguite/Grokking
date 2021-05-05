class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {
  result = [];
  // TODO: Write your code here
  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);



---------------------------------

const Deque = require('./collections/deque'); //http://www.collectionsjs.com


class TreeNode { // this just creates the tree itself
  constructor(val) { // enter in value to capture it
    this.val = val;
    this.left = null; // false is boolean and null is nothing but it's something
    this.right = null; // this just creates the tree itself
  }
}


function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }
// loop continues, no break or end
  const queue = new Deque(); // 
  queue.push(root);
  while (queue.length > 0) { // as long as the length is mor ethan zero, run this code below:
    const levelSize = queue.length; // const stays the same, set to length
    currentLevel = []; // let variable here. creating a variable to store our answers
    for (i = 0; i < levelSize; i++) { 
      currentNode = queue.shift(); // current node is the first thing we take the from the queue
      // add the node to the current level
      currentLevel.push(currentNode.val); // goign to push in the currentleven the currentNode value. has a value and children
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);


---------------


The time complexity of the above algorithm is O(N)O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) as we need to return a list containing the level order traversal. 
We will also need O(N)O(N) space for the queue. Since we can have a maximum of N/2N/2 nodes at any level (this could happen only at the lowest level),
 therefore we will need O(N)O(N) space to store them in the queue.

