'use strict';

var Attributes = function Attributes(attributes) {
    this.attrs = attributes || {};
};

Attributes.prototype.set = function set(attrName, value) {
    this.attrs[attrName] = value;
};

Attributes.prototype.get = function get(attrName) {
    return this.attrs[attrName];
};

Attributes.prototype.toString = function toScript() {
    var header = ' [ ';
    var body = ''
    var footer = ' ]';

    for (var attrName in this.attrs) {
        if (this.attrs.hasOwnProperty(attrName)) {
            body = body + attrName + ' = ' + this.attrs[attrName] + ', ';
        }
    }

    if (body === '') {
        return '';
    } else {
        return header + body + footer;
    }
};

module.exports = Attributes;
