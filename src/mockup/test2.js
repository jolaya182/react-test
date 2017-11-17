import React from 'react';
const nodeList = [];
let tree;

class TreeNode {
  constructor(name) {
    this.label = name;
    this._children = [];
  }
}

React.Component.prototype.componentWillMount = function() {
  nodeList.push(new TreeNode(this.constructor.name));
  console.log(` Will Mount: ${this.constructor.name}`)
  this.componentDidMount = function() {
    for (let i = 0; i < nodeList.length; i += 1) {
      if (nodeList.length === 1) {
        tree = nodeList.pop();
        break;
      }
      if (nodeList[i].label === this.constructor.name) {
        nodeList[i - 1]._children.push(nodeList[i])
        nodeList.splice(i, 1);
      }
    }
    console.log(` Did Mount: ${this.constructor.name}`)
    if (this.constructor.name === 'App') console.log(tree);
  }
}

const Component = React.Component;

export { React, Component };
