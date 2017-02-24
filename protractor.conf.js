'use strict';

const fs = require('fs');
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    // For checking in Cloud Services, you should use Username and Key for your account
    browserstackUser: process.env.BROWSERSTACK_USERNAME,
    browserstackKey: process.env.BROWSERSTACK_KEY,

    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],

    //exclude some tests here
    exclude: [],
    multiCapabilities: [{
        'browserName': 'chrome'
    }
        // TODO For checking in specific environment, you might use version of browser, version OS and name of scope for testing
       /*  {
         'browserstack.user': browserstackUser,
         'browserstack.key': browserstackKey,
         'browserName': 'firefox',
         'version': '32',
         'platform': 'OS X 10.10',
         'name': 'firefox-tests'
         }*/
    ],
    directConnect: true, // need to exclude this line, if you'll run tests using Cloud Services
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: () => {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        })
    )}
};
