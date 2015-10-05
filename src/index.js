'use strict';
var isDate = require('is-date-object');

module.exports = function isoDate(date) {
	var type = typeof date;
	if (type === 'number') {
		date = new Date(date);
	} else if (type === 'string') {
		date = new Date(Date.parse(date));
	} else if (type === 'undefined') {
		date = new Date();
	}
	if (!isDate(date)) {
		throw new TypeError('Expected Number, String, Date or undefined, but was: ' + type);
	}
	return isoDateFromDate(date);
};

function isoDateFromDate(date) {
	return date.toISOString().split('T')[0];
}
