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

Attributes.prototype.getAll = function getAll() {
    return this.attrs;
};

Attributes.prototype.toString = function toScript() {
    var header = ' [ ';
    var body = ''
    var footer = ' ]';
    var notFirst = false;

    for (var attrName in this.attrs) {
        if (this.attrs.hasOwnProperty(attrName)) {
            if (notFirst){
                body = body + ', ';
            } else {
                notFirst = true;
            }
            body = body + attrName + ' = ' + this.attrs[attrName];
        }
    }

    if (body === '') {
        return '';
    } else {
        return header + body + footer;
    }
};

module.exports = Attributes;
