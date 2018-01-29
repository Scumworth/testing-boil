// setup.js

const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
const globalVars = _.pick(global, ['browser', 'expect']);

// options 
const opts = {
    timeout: 10000
};

// create globals
before(async function() {
    global.expect = expect;
    global.browser = await puppeteer.launch(opts);
});

// close broswer and reset globals
after (function() {
    browser.close();
    global.browser = globalVars.browser;
    global.expect = globalVars.expect;
};
