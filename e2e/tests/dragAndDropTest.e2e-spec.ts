'use strict';

import { browser, protractor } from 'protractor';
import { DropMePage } from '../pages/dropMePage';
const dropFile = require('../helpers/dragAndDrop');
const EC = protractor.ExpectedConditions;

describe('Drag and Drop Tests: ', () => {
  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get('https://dropfile.to/');
  });

  it('Move files to service and check link', () => {
    dropFile(DropMePage.inputFieldForImages, 'e2e/data/3.png');

    DropMePage.startUploadingButton.click();
    browser.wait(EC.visibilityOf(DropMePage.urlLoadedImage), 20000);

    expect(DropMePage.urlLoadedImage.getText()).toContain('https://dropfile.to/');
  });
});
