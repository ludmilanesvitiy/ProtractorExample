'use strict';

import { $, ElementFinder } from 'protractor';

export class MatrixPage {
  public static hamburgerMenu: ElementFinder = $('span[class="menu-icon"]');

  public static getShareButtonInHamburgerMenu(social: string): ElementFinder {
    return $('div[class*="share-button ' + social + '"]');
  }
}
