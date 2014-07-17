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
    "primatives/numerical/integerdecimal": /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
};


var RegexLibrary = function(name) {
    if (!name) {
        throw new ReferenceError("A regex name should be passed to this constructor.");
    }

    this.setRegex(name);

    return this._regex;
};

RegexLibrary.prototype.setRegex = function(name) {
    if (RegexLibraryContents[name]) {
        this._regex = RegexLibraryContents[name];
    } else {
        this._regex = "";
    }
};

module.exports = RegexLibrary;
