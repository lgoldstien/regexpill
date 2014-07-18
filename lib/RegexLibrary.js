/*
 * regex-pill
 * https://github.com/lgoldstien/regex-pill
 *
 * Copyright (c) 2014 Lawrence Goldstien
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Any regex added here should have a test written for it in ../test/RegexPill_test.js
 * This list should always be in alphabetical order for ease of use
 */
var RegexLibraryContents = {
    "uri/db/mongodb": /^(mongodb:\/\/)([a-z0-9]+:[a-z0-9]+@)?([a-zA-Z0-9-_.]+)(:[0-9]+)?(\/[a-z_-]+)?$/g,
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

RegexLibrary.prototype.list = function() {
    return RegexLibraryContents;
};

module.exports = RegexLibrary;
