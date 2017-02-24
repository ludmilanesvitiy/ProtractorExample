'use strict';

import { $, ElementFinder } from 'protractor';

export class MapPage {
  public static mapImage: ElementFinder = $('.map-color');

  public static setMapErrorMessage(name: string): string {
    return name + ' on Map Page is not loaded';
  };
}
