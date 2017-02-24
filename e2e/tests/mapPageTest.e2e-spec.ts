'use strict';

import { browser } from 'protractor';
import { MapPage } from '../pages/mapPage';
import { DataProvider } from '../data/dataProvider';
import { AbstractPage } from '../pages/abstractPage';

const using = require('jasmine-data-provider');

describe('Map Page test', () => {
  beforeAll(() => {
    browser.get('https://www.gapminder.org/dollar-street/map');
    browser.wait(AbstractPage.getEC().visibilityOf(MapPage.mapImage), AbstractPage.getTimeout, MapPage.setMapErrorMessage('Map Image didn"t load'));
  });

  using(DataProvider.mapPageCountry, (data: any, description: any) => {
    it('Check ' + description + ' on Map page', () => {
      expect(data.element().getText()).toEqual(data.actualResult);
    });
  });
});
