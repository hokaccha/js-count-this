var countTest = require('../count-this');
var fs = require('fs');
var assert = require('assert');

var result = countTest(fs.readFileSync(__dirname + '/data/test.js', 'utf8'));

assert.equal(result['foo.bar.baz[0]'], 1);
assert.equal(result['self'], 3);
assert.equal(result['foo'], 1);
assert.equal(result['bar'], 1);

console.log('ok');
