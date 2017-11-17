
import { Component } from 'react';

export default function testFunc(c) {
  const { componentDidMount, componentDidUpdate } = c.prototype;
  c.prototype.componentDidMount = function() {
    (function() {
      console.log('---------')
      console.log('ComponentDidMount: inside IIFE that will do our work!');
      console.log(Component.prototype);
      console.log(this);
    }).bind(this)()

    componentDidMount();
  }

  c.prototype.componentDidUpdate = function() {
    (function() {
      console.log('componentDidUpdate: inside hijacked componentDidUpdate!')
      console.log(this);
    }).bind(this)()

    componentDidUpdate();
  }
  // console.log(c);
  return c;
}
