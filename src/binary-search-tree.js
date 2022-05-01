const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._treeRoot = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._treeRoot;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this._treeRoot == null) {
      this._treeRoot = new Node(data);
      //return;
    } else {
      this._addNode(this._treeRoot, data);
    }
  }

  _addNode(node, data) {
    if (data < node.data) {
      if (node.left == null) {
        node.left = new Node(data);
        return;
      } else {
        return this._addNode(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right == null) {
        node.right = new Node(data);
        return;
      } else {
        return this._addNode(node.right, data);
      }
    }
  }


  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this._treeRoot;
    while (current) {
      if (data == current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this._treeRoot;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const removeNode = (node, data) => {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let nodeTemp = node.right;
        while (nodeTemp.left !== null) {
          nodeTemp = nodeTemp.left;
        }
        node.data = nodeTemp.data;
        node.right = removeNode(node.right, nodeTemp.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this._treeRoot = removeNode(this._treeRoot, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this._treeRoot;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this._treeRoot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};