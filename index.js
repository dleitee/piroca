var uniqueRandomArray = require('unique-random-array');
var pirocaNames = require('./names.json');

exports.names = pirocaNames;
exports.randomize = uniqueRandomArray(pirocaNames);
