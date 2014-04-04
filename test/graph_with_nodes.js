'use strict';

var a = require('assert');

var g = require('../main');

var Node = require('../lib/node');
var NodeAttributes = require('../lib/attributes/node');

function createGraph(){
    return g.graph('myGraph');
}

describe('Test graph\'s node functions', function(){
    describe('addNode function', function(){
        it('should add a new node to the graph when node ID does not exist yet', function(){
            var id1 = 'newNode1';
            var id2 = 'newNode2';
            var graph = createGraph();

            var node1 = graph.addNode(id1);
            var node2 = graph.addNode(id2);

            a.ok(node1 instanceof Node);
            a.strictEqual(node1.id, id1);
            a.deepEqual(graph.nodes[id1], node1);

            a.ok(node2 instanceof Node);
            a.strictEqual(node2.id, id2);
            a.deepEqual(graph.nodes[id2], node2);
        });

        it('should replace a node when the given ID already exists', function(){
            var id = 'newNode';
            var graph = createGraph();

            var node1 = graph.addNode(id);
            var node2 = graph.addNode(id);

            a.notStrictEqual(node1, node2);
            a.strictEqual(graph.nodes[id], node2);
        });

        it('should set the given attributes for a node', function(){
            var id = 'newNode';
            var graph = createGraph();
            var attrs = {color: 'blue'};

            var node = graph.addNode(id, attrs);

            a.ok(node.attrs instanceof NodeAttributes);
            a.strictEqual(node.attrs.getAll(), attrs);
        });
    });

    describe('hasNode function', function(){
        it('should return true if the given node ID exists in the graph', function(){
            var id = 'newNode';
            var graph = createGraph();

            graph.addNode(id);

            a.ok(graph.hasNode(id));
        });

        it('should return false if the given node ID does not exist in the graph', function(){
            var id = 'newNode';
            var graph = createGraph();

            a.ok(!graph.hasNode(id));
        });
    });

    describe('removeNode function', function(){
        it('should remove the node with the given ID', function(){
            var id = 'newNode';
            var graph = createGraph();

            graph.addNode(id);

            a.ok(graph.hasNode(id));

            graph.removeNode(id);

            a.ok(!graph.hasNode(id));
        });
    });

    describe('node.setAttribute', function(){
        it('should set a single node attribute', function(){
            var id = 'newNode';
            var graph = createGraph();
            var attrs = {color: 'blue'};

            var node = graph.addNode(id);
            node.setAttribute('color', 'blue');

            a.deepEqual(node.attrs.getAll(), attrs);
        });
    });

    describe('node.getAttribute', function(){
        it('should get the value for a single node attribute', function(){
            var id = 'newNode';
            var graph = createGraph();
            var attrs = {color: 'blue'};

            var node = graph.addNode(id, attrs);
            node.setAttribute('color', 'blue');

            a.strictEqual(node.getAttribute('color'), 'blue');
        });
    });
});
