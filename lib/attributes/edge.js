'use strict';

var inherits = require('util').inherits;
var Attributes = require('./attributes');

var EdgeAttributes = function EdgeAttributes(attributes) {
    Attributes.call(this, attributes);
};

inherits(EdgeAttributes, Attributes);

module.exports = EdgeAttributes;
