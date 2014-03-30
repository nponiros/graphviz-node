'use strict';

var inherits = require('util').inherits;
var Attributes = require('./attributes');

var NodeAttributes = function NodeAttributes(attributes) {
    Attributes.call(this, attributes);
};

inherits(NodeAttributes, Attributes);

module.exports = NodeAttributes;
