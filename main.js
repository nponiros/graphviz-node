'use strict';

var Graph = require('./lib/graph');

var graphTypes = {};

/*
 * Create new undirected graph
 */
graphTypes.graph = function(id, attributes) {
    var type = 'graph';
    var isStrict = false;
    var graph = new Graph(id, type, isStrict, attributes);
    return graph;
};

/*
 * Create new strict undirected graph
 */
graphTypes.strictGraph = function(id, attributes) {
    var type = 'graph';
    var isStrict = true;
    var graph = new Graph(id, type, isStrict, attributes);
    return graph;
};

/*
 * Create new directed graph
 */
graphTypes.digraph = function(id, attributes) {
    var type = 'digraph';
    var isStrict = false;
    var graph = new Graph(id, type, isStrict, attributes);
    return graph;
};

/*
 * Create new strict directed graph
 */
graphTypes.strictDigraph = function(id, attributes) {
    var type = 'digraph';
    var isStrict = true;
    var graph = new Graph(id, type, isStrict, attributes);
    return graph;
};

module.exports = graphTypes;