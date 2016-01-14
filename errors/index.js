var util = require('util');
function CronofyError(code, message) {
	Error.call(this);
	Error.captureStackTrace(this, arguments.callee);

	this.message = message;
	this.code = code;

	this.name = 'CronofyError';
	this.isAlixApiError = true;
}

CronofyError.prototype.__proto__ = Error.prototype;

module.exports = {
	Unknown: CronofyError(0, 'An unknown error occurred processing your request. Please try again later.')
};