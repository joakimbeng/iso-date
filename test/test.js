'use strict';
var test = require('ava');
var isoDate = require('../src');

test('given a number', function (assert) {
	assert.plan(1);
	var actual = isoDate(Date.parse('2015-01-02 03:04:05'));
	var expected = '2015-01-02';
	assert.is(actual, expected);
});

test('given a date', function (assert) {
	assert.plan(1);
	var actual = isoDate(new Date(Date.parse('2015-01-02 03:04:05')));
	var expected = '2015-01-02';
	assert.is(actual, expected);
});

test('given a string', function (assert) {
	assert.plan(1);
	var actual = isoDate('2015-01-02 03:04:05');
	var expected = '2015-01-02';
	assert.is(actual, expected);
});

test('given nothing', function (assert) {
	assert.plan(1);
	var today = new Date();
	var month = today.getMonth() + 1;
	var day = today.getDate();

	var actual = isoDate();
	var expected = today.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
	assert.is(actual, expected);
});

test('given something else', function (assert) {
	assert.plan(1);
	assert.throws(function () {
		isoDate(true);
	});
});
