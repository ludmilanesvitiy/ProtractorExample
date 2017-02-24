'use strict';

import { browser } from 'protractor';
import { XLS } from '../helpers/xls';
import { CountryPage } from '../pages/countryPage';
import { DataProvider } from '../data/dataProvider';

const using = require('jasmine-data-provider');
const columnEnglish: string = 'A';

describe('Checking counrty names on Country Page in language: ', () => {
  using(DataProvider.countryPageId, (data: any, description: any) => {
    it('English, country: ' + description, () => {
      browser.get('http://www.gapminder.org/dollar-street/country/' + data.countryId);
      expect(CountryPage.countryName.getText()).toEqual(description);
      expect(CountryPage.countryName.getText()).toEqual(XLS.getDataFromXLS(columnEnglish + data.numberOfCell));
    });
  });
});
