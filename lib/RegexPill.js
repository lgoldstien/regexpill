/*
 * regex-pill
 * https://github.com/lgoldstien/regex-pill
 *
 * Copyright (c) 2014 Lawrence Goldstien
 * Licensed under the MIT license.
 */

'use strict';

var RegexLibrary = require('./RegexLibrary');

var RegexPill = function(value, regex) {
    this._value = value;
    if (regex) {
        this._regex = new RegexLibrary(regex);
    }
};

RegexPill.prototype.isValid = function() {
    if (!this._regex) {
        throw new ReferenceError("Cannot validate against a non-existant regex.");
    }
    if (!this._value) {
        throw new ReferenceError("Cannot validate against a non-existant value.");
    }

    return (this._value.match(this._regex)) ? true : false;
};

RegexPill.prototype.get = function() {
    return this._value;
};

RegexPill.prototype.regex = function (regex) {
    if (!regex) {
        throw new Error("A regex should be provided");
    }

    if (typeof regex !== "string") {
        this._regex = regex;
    } else {
        this._regex = new RegexLibrary(regex);
    }

    return this;
};

RegexPill.prototype.set = function(value) {
    if (!value) {
        throw new Error("A value should be provided");
    }

    this._value = value;

    return this;
};

module.exports = RegexPill;
