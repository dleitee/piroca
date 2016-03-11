var fs = require('fs');
var _ = require('lodash');
var test = require('ava');
var arrayUniq = require('array-uniq');
var parseJson = require('parse-json');
var alphaSort = require('alpha-sort');
var piroca = require('./');
var namesJsonFile = fs.readFileSync('./names.json');

test('Should have a valid JSON piroca names list', function(t) {
  t.assert(parseJson(namesJsonFile, 'names.json'));
});

test('Should return multiple piroca names', function(t) {
  t.assert(piroca.names.length > 1);
});

test('Should return a single random piroca name', function(t) {
  t.assert(piroca.randomize());
});

test('Should have no duplicated piroca names', function(t) {
  t.assert(arrayUniq(piroca.names).length === piroca.names.length);
});

test('Should have an alphabetized piroca names list', function(t) {
  t.assert(_.isEqual(parseJson(namesJsonFile).sort(alphaSort.asc), piroca.names));
});
