/*
 * regex-pill
 * https://github.com/lgoldstien/regex-pill
 *
 * Copyright (c) 2014 Lawrence Goldstien
 * Licensed under the MIT license.
 */

'use strict';

var RegexLibraryContents = {
    "hostnames":{
        "databases": {
            "mongodb": /^(mongodb:\/\/)([a-z0-9]+:[a-z0-9]+@)?([a-zA-Z0-9-_.]+)(:[0-9]+)?(\/[a-z_-]+)?$/g,
        }
    }
};


var RegexLibrary = function () {

};

RegexLibrary.prototype.get = function (name) {
    this._selectedRegex = name;
};

module.exports = RegexLibrary;
