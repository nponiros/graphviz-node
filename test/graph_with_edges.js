'use strict';

var a = require('assert');

var g = require('../main');

var Edge = require('../lib/edge');
var EdgeAttributes = require('../lib/attributes/edge');

function createGraphWithNodes(id1, id2){
    var graph = g.graph('myGraph');
    graph.addNode(id1);
    graph.addNode(id2);
    return graph;
}

describe('Test graph\'s edge functions', function(){
    describe('addEdge function', function(){
        it('should add an edge to the graph', function(){
            var id1 = 'newNode1';
            var id2 = 'newNode2';
            var graph = createGraphWithNodes(id1, id2);

            var edge = graph.addEdge(id1, id2);

            a.ok(edge instanceof Edge);
            a.deepEqual(graph.edges, [edge]);
            a.strictEqual(edge.from, id1);
            a.strictEqual(edge.to, id2);
        });

        it('should set the given attributes for an edge', function(){
            var id1 = 'newNode1';
            var id2 = 'newNode2';
            var graph = createGraphWithNodes(id1, id2);
            var attrs = {color: 'blue'};

            var edge = graph.addEdge(id1, id2, attrs);

            a.ok(edge.attrs instanceof EdgeAttributes);
            a.strictEqual(edge.attrs.getAll(), attrs);
        });
    });

    describe('edge.setAttribute', function(){
        it('should set a single edge attribute', function(){
            var id1 = 'newNode1';
            var id2 = 'newNode2';
            var graph = createGraphWithNodes(id1, id2);
            var attrs = {color: 'blue'};

            var edge = graph.addEdge(id1, id2);
            edge.setAttribute('color', 'blue');

            a.deepEqual(edge.attrs.getAll(), attrs);
        });
    });

    describe('edge.getAttribute', function(){
        it('should get the value for a single edge attribute', function(){
            var id1 = 'newNode1';
            var id2 = 'newNode2';
            var graph = createGraphWithNodes(id1, id2);
            var attrs = {color: 'blue'};

            var edge = graph.addEdge(id1, id2, attrs);

            a.strictEqual(edge.getAttribute('color'), 'blue');
        });
    });
});
