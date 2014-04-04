'use strict';

var EdgeAttributes = require('./attributes/edge');

var Edge = function Edge(fromNodeId, toNodeId, edgeRHS, attributes) {
    this.from = fromNodeId;
    this.to = toNodeId;
    this.rhs = edgeRHS;
    this.attrs = new EdgeAttributes(attributes);
};

Edge.prototype.setAttribute = function setAttribute(attrName, value) {
    this.attrs.set(attrName, value);
};

Edge.prototype.getAttribute = function getAttribute(attrName) {
    this.attrs.get(attrName);
};

Edge.prototype.toString = function toString() {
    return '"' + this.from + '"' + ' ' + this.rhs + ' ' + '"' + this.to + '"' + this.attrs.toString();
};

module.exports = Edge;
