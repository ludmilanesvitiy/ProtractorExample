'use strict';

import { ElementFinder, $, element, by } from 'protractor';

export class DropMePage {
  public static inputFieldForImages: ElementFinder = element(by.id('container'));
  public static startUploadingButton: ElementFinder = element(by.id('start_uploading'));
  public static urlLoadedImage: ElementFinder = $('.generated-links a');
}
