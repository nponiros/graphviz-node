'use strict';

var NodeAttributes = require('./attributes/node');

var Node = function Node(id, attributes) {
    this.id = id;
    this.attrs = new NodeAttributes(attributes);
};

Node.prototype.setAttribute = function setAttribute(attrName, value) {
    this.attrs.set(attrName, value);
};

Node.prototype.getAttribute = function getAttribute(attrName) {
    return this.attrs.get(attrName);
};

Node.prototype.toString = function toString() {
    return '"' + this.id + '"' + this.attrs.toString();
};

module.exports = Node;
