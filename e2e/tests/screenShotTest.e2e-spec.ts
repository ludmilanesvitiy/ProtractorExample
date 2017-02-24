'use strict';

import fs = require('fs');
import { browser } from 'protractor';
import { DataProvider } from '../data/dataProvider';
import { AbstractPage } from '../pages/abstractPage';

const using = require('jasmine-data-provider');

describe('Take screenShot', () => {
  beforeAll(() => {
    browser.ignoreSynchronization = true;
  });

  using(DataProvider.allPagesScreenShots, (data: any, description: string) => {
    it(' from every page', () => {
      browser.get(data.url);

      browser.takeScreenshot().then((png) => {
        AbstractPage.writeScreenShot(png, description + '.png');
      });
    });
  });
});



