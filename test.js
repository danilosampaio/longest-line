'use strict';
var assert = require('assert');
var longestLine = require('./');

describe('longest-line', function(){
	it('should return the longest line length', function () {
		assert.strictEqual(longestLine('Supercalifragilisticexpialidocious\n is long\n word'), 34);
	});

	it('should handle correctly two lines with the same length', function () {
		assert.strictEqual(longestLine('suoicodilaipxecitsiligarfilacrepuS\n is \nSupercalifragilisticexpialidocious\n in reverse order.'), 34);
	});

	it('should handle correctly ansi escape codes', function () {
		assert.strictEqual(longestLine('\u001b[1mthis\u001b[22m\n is a dummy\n text'), 11);
	});

	it('should handle a text with one line', function () {
		assert.strictEqual(longestLine('\u001b[1mthis\u001b[22m is a dummy text'), 20);
	});
});