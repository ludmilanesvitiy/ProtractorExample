'use strict';

import { $, ElementFinder } from 'protractor';

export class CountryPage {
  public static countryName: ElementFinder = $('h2[class*="heading"]');
}
