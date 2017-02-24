'use strict';

import fs = require('fs');
import { protractor, element, by, ProtractorExpectedConditions, ElementFinder } from 'protractor';

export class AbstractPage {
  public static loader: ElementFinder = element.all(by.css('div[class*="loader"]')).first();
  public static getTimeout: number = 1000;

  public static getEC(): ProtractorExpectedConditions {
    return protractor.ExpectedConditions;
  };

  public static writeScreenShot: any = (info: any, filename: string) => {
    const stream: any = fs.createWriteStream(filename);

    stream.write(new Buffer(info, 'base64'));
    stream.end();
  };
}
