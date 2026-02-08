const base = require('@playwright/test');
//const loginData = require('../testdata/loginData.json');
import testdata from '../utils/testData.js';
// Extend base test
exports.test = base.test.extend({
  loginData: async ({}, use) => {
    await use(testdata);
  },
});

exports.expect = base.expect;
