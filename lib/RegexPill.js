/*
 * regex-pill
 * https://github.com/lgoldstien/regex-pill
 *
 * Copyright (c) 2014 Lawrence Goldstien
 * Licensed under the MIT license.
 */

'use strict';

var RegexLibrary = require('./RegexLibrary');

var RegexPill = function(value, name) {
    if (!value || !name) {
        throw new Error("Both a value and a name should be provided");
    }
    this._value = value;
    this._regex = new RegexLibrary(name);
};

RegexPill.prototype.isValid = function() {
    if (!this._regex) {
        throw new ReferenceError("Cannot validate against a non-existant regex.");
    }

    return (this._value.match(this._regex)) ? true : false;
};

RegexPill.prototype.get = function() {
    return this._value;
};

RegexPill.prototype.set = function(value) {
    if (!value) {
        throw new Error("Both a value and a name should be provided");
    }

    this._value = value;

    return this;
};

module.exports = RegexPill;
