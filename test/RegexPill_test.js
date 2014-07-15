'use strict';

var RegexPill = require('../lib/regex-pill.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['Instantiation'] = {
    setUp: function(done) {
        done();
    },
    'No Errors': function(test) {
        test.expect(1);

        test.doesNotThrow(function() {
            var regex_pill = new RegexPill();
        }, Error, "Should not throw an error upon instantiation.");

        test.done();
    },
};

exports['Validation'] = {
    setUp: function(done) {
        var regexPill = new RegexPill();
        done();
    },
};
