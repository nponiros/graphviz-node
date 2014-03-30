'use strict';

var inherits = require('util').inherits;
var Attributes = require('./attributes');

var GraphAttributes = function GraphAttributes(attributes) {
    Attributes.call(this, attributes);
};

inherits(GraphAttributes, Attributes);

module.exports = GraphAttributes;
