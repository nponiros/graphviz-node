'use strict';

var Node = require('./node');
var Edge = require('./edge');
var GraphAttributes = require('./attributes/graph');
var EdgeAttributes = require('./attributes/edge');
var NodeAttributes = require('./attributes/node');

function setAttributes(attributes) {
    var attrs = {
        graph: new GraphAttributes(),
        node: new NodeAttributes(),
        edge: new EdgeAttributes()
    };

    if (attributes === undefined || attributes === null) {
        return attrs;
    } else {
        attrs.graph = new GraphAttributes(attributes.graph);
        attrs.node = new NodeAttributes(attributes.node);
        attrs.edge = new EdgeAttributes(attributes.edge);
        return attrs;
    }
}

var Graph = function Graph(id, graphType, isStrict, attributes) {
    this.id = id;
    this.type = graphType;
    this.isStrict = isStrict;
    this.nodes = {};
    this.edges = [];
    this.attrs = setAttributes(attributes);
    this.subgraphs = {};
};

Graph.prototype.addNode = function addNode(id, attributes) {
    var node = new Node(id, attributes);
    this.nodes[id] = node;
    return node;
};

Graph.prototype.hasNode = function hasNode(id){
    return this.nodes[id] !== undefined;
};

Graph.prototype.removeNode = function removeNode(id) {
    if (this.nodes[id] !== undefined) {
        delete this.nodes[id];
    }
};

Graph.prototype.addEdge = function addEdge(fromNode, toNode, attributes) {
    var edgeRHS = this.type === 'graph' ? '--' : '->';
    var edge = new Edge(fromNode, toNode, edgeRHS, attributes);
    this.edges.push(edge);
    return edge;
};

Graph.prototype.addSubgraph = function addSubgraph(id, attributes){
    var subgraph = new Graph(id, 'subgraph', false, attributes);
    this.subgraphs[id] = subgraph;
    return subgraph;
};

Graph.prototype.removeSubgraph = function removeSubgraph(id) {
    if (this.subgraphs[id] !== undefined) {
        delete this.subgraphs[id];
    }
};

Graph.prototype.setGraphAttribute = function setAttribute(attrName, value) {
    this.attrs.graph.set(attrName, value);
};

Graph.prototype.getGraphAttribute = function getGraphAttribute(attrName) {
    return this.attrs.graph.get(attrName);
};

Graph.prototype.setNodesAttribute = function setAttribute(attrName, value) {
    this.attrs.node.set(attrName, value);
};

Graph.prototype.getNodesAttribute = function getGraphAttribute(attrName) {
    return this.attrs.node.get(attrName);
};

Graph.prototype.setEdgesAttribute = function setAttribute(attrName, value) {
    this.attrs.edge.set(attrName, value);
};

Graph.prototype.getEdgesAttribute = function getGraphAttribute(attrName) {
    return this.attrs.edge.get(attrName);
};

function getAttrsString(attrs) {
    var result = '';
    for (var type in attrs) {
        if (attrs.hasOwnProperty(type)) {
            var typedAttrs = attrs[type].toString();
            if (typedAttrs !== '') {
                result = result + ' ' + type + ' ' + typedAttrs + ';\n';
            }
        }
    }
    return result;
}

Graph.prototype.toString = function toString() {
    var strict = this.isStrict ? 'strict ' : '';
    var attrs = getAttrsString(this.attrs);
    var nodes = '';
    var edges = '';

    for (var id in this.nodes) {
        if (this.nodes.hasOwnProperty(id)) {
            nodes = nodes + this.nodes[id].toString() + ';\n';
        }
    }

    this.edges.forEach(function(edge) {
        edges = edges + edge.toString() + ';\n';
    });

    var header = strict + this.type + ' ' + this.id + ' {\n';
    var body = attrs + nodes + edges;
    var footer = '}';

    return header + body + footer;
};

module.exports = Graph;
