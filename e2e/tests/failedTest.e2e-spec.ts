'use strict';

import { browser, element, by } from 'protractor';
import { AbstractPage } from '../pages/abstractPage';

describe('Examples of failure', () => {
  //if console will have some errors (will be not empty), it'll be showed.
  // after each error, will be taken screenshot
  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any) => {
      if (browserLog.length) {
        console.log('log: ' + require('util').inspect(browserLog));
      }
    });

    jasmine.getEnv().addReporter(new function () {
      this.specDone = (result: any) => {
        if (result.failedExpectations.length) {
          browser.takeScreenshot().then((png: any) => {
            AbstractPage.writeScreenShot(png, result.id + ':' + result.description + '.png');
          });
        }
      };
    });
  });
  // test will fail and in console we'll get log : [ Entry { level: Level { name_: 'SEVERE', value_: 1000 },
  // message: 'http://google1.com/ - Failed to load resource: net::ERR_NAME_NOT_RESOLVED',
  // timestamp: 1487779647826,
  // type: '' } ]
  it('should fail to find a non-existent element', () => {
    browser.ignoreSynchronization = true;
    browser.get('http://google1.com');
    const notExistElement: any = element(by.id('nopenopenope'));
    expect(notExistElement.isDisplayed()).toBeTruthy();
  });
});
