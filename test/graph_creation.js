'use strict';

var a = require('assert');

var g = require('../main');

function verify(actual, expected){
    a.strictEqual(actual.id, expected.id);
    a.strictEqual(actual.type, expected.type);
    a.strictEqual(actual.isStrict, expected.isStrict);
    a.deepEqual(actual.nodes, expected.nodes);
    a.deepEqual(actual.edges, expected.edges);
    a.deepEqual(actual.attrs, expected.attrs);
    a.deepEqual(actual.subgraphs, expected.subgraphs);
}

var emptyGraphAttrs = {
    graph:{attrs:{}},
    node:{attrs:{}},
    edge:{attrs:{}}
};

describe('Basic graph creation tests', function(){
    describe('main graph function', function(){
        it('should create an empty graph', function() {
            var id = 'TestGraph';
            var graph = g.graph(id);

            var expected = {
                id: id,
                type: 'graph',
                isStrict: false,
                nodes: {},
                edges: [],
                attrs: emptyGraphAttrs,
                subgraphs: {}
            };

            verify(graph, expected);
        });
    });

    describe('main strictGraph function', function(){
        it('should create an empty strict graph', function() {
            var id = 'TestGraph';
            var graph = g.strictGraph(id);

            var expected = {
                id: id,
                type: 'graph',
                isStrict: true,
                nodes: {},
                edges: [],
                attrs: emptyGraphAttrs,
                subgraphs: {}
            };

            verify(graph, expected);
        });
    });

    describe('main digraph function', function(){
        it('should create an empty digraph', function() {
            var id = 'TestGraph';
            var graph = g.digraph(id);

            var expected = {
                id: id,
                type: 'digraph',
                isStrict: false,
                nodes: {},
                edges: [],
                attrs: emptyGraphAttrs,
                subgraphs: {}
            };

            verify(graph, expected);
        });
    });

    describe('main strictDigraph function', function(){
        it('should create an empty strict digraph', function() {
            var id = 'TestGraph';
            var graph = g.strictDigraph(id);

            var expected = {
                id: id,
                type: 'digraph',
                isStrict: true,
                nodes: {},
                edges: [],
                attrs: emptyGraphAttrs,
                subgraphs: {}
            };

            verify(graph, expected);
        });
    });
});