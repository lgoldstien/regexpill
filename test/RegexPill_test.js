/*jshint -W098 */
'use strict';

var RegexPill = require('../lib/RegexPill.js');

/**
 * Testing File
 *
 * Please ensure that any regex added to the RegexLibrary file have tests added here, both passing validation and failing validation
 *
 * The format of your tests should be:
 * 'library/path': function(test) {
 *     test.expect(2);
 *     test.equal(
 *         this.regexPill.regex('library/path').set("string to pass regex").isValid(),
 *         true,
 *         "Unable to validate (the regex)"
 *     );
 *     test.equal(
 *         this.regexPill.regex('library/path').set("string to fail regex").isValid(),
 *         false,
 *         "Able to validate invalid (the regex)"
 *     );
 *     test.done();
 * }
 */

exports['Instantiation'] = {
    setUp: function(done) {
        done();
    },
    'No Errors': function(test) {
        test.expect(2);

        test.doesNotThrow(function() {
            var regex_pill = new RegexPill("mongodb://localhost", "hostnames/databases/mongodb");
        }, Error, "Should not throw an error upon instantiation.");

        test.doesNotThrow(function() {
            var regex_pill = new RegexPill();
        }, Error, "Should not throw an error upon instantiation.");

        test.done();
    },
};

exports['Validation'] = {
    setUp: function(done) {
        this.regexPill = new RegexPill();
        done();
    },
    'Pass Validation': function(test) {
        test.expect(1);

        test.equal(this.regexPill.regex("uri/db/mongodb").set("mongodb://localhost").isValid(), true, "This should pass validation");

        test.done();
    },
    'Fail Validation': function(test) {
        test.expect(1);

        test.equal(this.regexPill.regex("uri/db/mongodb").set("mong://localhost").isValid(), false, "This should pass validation");

        test.done();
    }
};

exports['Regex'] = {
    setUp: function(done) {
        this.regexPill = new RegexPill();
        done();
    },
    'uri/db/mongodb': function(test) {
        test.expect(2);
        test.equal(
            this.regexPill.regex('uri/db/mongodb').set("mongodb://user:pass@localhost.lan:3900/db_name").isValid(),
            true,
            "Unable to validate mongodb uri"
        );
        test.equal(
            this.regexPill.regex('uri/db/mongodb').set("mongod://u5er:p@ss@loc4lho**st.lan:3900/db_name").isValid(),
            false,
            "Able to validate invalid mongodb uri"
        );
        test.done();
    }
};
