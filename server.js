require('dotenv').config();
require('module-alias/register');
const User = require('@model/User');

const boot = require('@service/boot');

boot();
