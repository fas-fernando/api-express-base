const { requests } = require('@config');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
    windowMs: requests.rateLimit.window,
    max: requests.rateLimit.max,
});

const slower = slowDown({
    windowMs: requests.slowDown.window,
    dalayAfter: requests.slowDown.dalayAfter,
    dalayMs: requests.slowDown.dalayMs,
});

module.exports = [
    slower,
    limiter,
];