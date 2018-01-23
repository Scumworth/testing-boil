// sample.test.js

const { expect } = require('chai');
const puppeteer = require('puppeteer');

describe('Sample tests', () => {

    // Globals
    let browser;
    let page;

    //Hooks
    before(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
    });
    afterEach(async () => {
        await page.close();
    });
    after(async () => {
        await browser.close();
    });
    
    // Tests
    
});
