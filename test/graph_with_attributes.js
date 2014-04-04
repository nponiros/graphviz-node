'use strict';

var a = require('assert');

var g = require('../main');

var GraphAttributes = require('../lib/attributes/graph');
var NodeAttributes = require('../lib/attributes/node');
var EdgeAttributes = require('../lib/attributes/edge');

function createGraph(attrs){
    return g.graph('myGraph', attrs);
}

describe('Test graph\'s attribute functions', function(){
    describe('constructor', function(){
        it('should prepare the attributes when called without attribute values', function() {
            var graph = createGraph();

            a.ok(graph.attrs.graph instanceof GraphAttributes);
            a.ok(graph.attrs.node instanceof NodeAttributes);
            a.ok(graph.attrs.edge instanceof EdgeAttributes);
        });

        it('should set the correct attribute values when called', function() {
            var nodeAttrs = {color:'blue'};
            var edgeAttrs = {color: 'red'};
            var graphAttrs = {comment: 'this is a comment'};
            var allAttrs = {
                node: nodeAttrs,
                edge: edgeAttrs,
                graph: graphAttrs
            };
            var graph = createGraph(allAttrs);

            a.deepEqual(graph.attrs.graph.getAll(), graphAttrs);
            a.deepEqual(graph.attrs.node.getAll(), nodeAttrs);
            a.deepEqual(graph.attrs.edge.getAll(), edgeAttrs);
        });
    });

    describe('setGraphAttribute function', function(){
        it('should set a single graph attribute', function(){
            var graph = createGraph();
            var comment = 'this is a comment';

            graph.setGraphAttribute('comment', comment);

            var expected = {comment:comment};
            a.deepEqual(graph.attrs.graph.getAll(), expected);
        });
    });

    describe('getGraphAttribute function', function(){
        var comment = 'this is a comment';
        var graphAttr = {graph:{comment: comment}};
        var graph = createGraph(graphAttr);

        a.strictEqual(graph.getGraphAttribute('comment'), comment);
    });

    describe('setNodesAttribute function', function(){
        var graph = createGraph();

        graph.setNodesAttribute('color', 'blue');

        var expected = {color:'blue'};
        a.deepEqual(graph.attrs.node.getAll(), expected);
    });

    describe('getNodesAttribute function', function(){
        var nodeAttrs = {node:{color: 'blue'}};
        var graph = createGraph(nodeAttrs);

        a.strictEqual(graph.getNodesAttribute('color'), 'blue');
    });

    describe('setEdgesAttribute function', function(){
        var graph = createGraph();

        graph.setEdgesAttribute('color', 'blue');

        var expected = {color:'blue'};
        a.deepEqual(graph.attrs.edge.getAll(), expected);
    });

    describe('getEdgesAttribute function', function(){
        var edgeAttrs = {edge:{color: 'blue'}};
        var graph = createGraph(edgeAttrs);

        a.strictEqual(graph.getEdgesAttribute('color'), 'blue');
    });
});
