/*
 * regex-pill
 * https://github.com/lgoldstien/regex-pill
 *
 * Copyright (c) 2014 Lawrence Goldstien
 * Licensed under the MIT license.
 */

'use strict';

var RegexLibraryContents = {
    "hostnames/databases/mongodb": /^(mongodb:\/\/)([a-z0-9]+:[a-z0-9]+@)?([a-zA-Z0-9-_.]+)(:[0-9]+)?(\/[a-z_-]+)?$/g,
};


var RegexLibrary = function (value, name) {
    if (!value)
        throw new ReferenceError("A value should be passed to this constructor.");

    this._value = value;

    if (name)
        this.setRegex(name);

    return this;
};

RegexLibrary.prototype.isValid = function () {
    var regex;

    if (!this._selectedRegex.regex)
        throw new ReferenceError("Cannot validate against a non-existant regex.");

    regex = this._selectedRegex.regex;

    
};

RegexLibrary.prototype.setRegex = function (name) {
    this._selectedRegex = { name: name };

    (RegexLibraryContents[this._selectedRegex.name]) ?
        this._selectedRegex.regex = RegexLibraryContents[this._selectedRegex.name] :
        this._selectedRegex = {};


};

module.exports = RegexLibrary;
