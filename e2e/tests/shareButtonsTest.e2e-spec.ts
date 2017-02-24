'use strict';

import { browser } from 'protractor';
import { MatrixPage } from '../pages/matrixPage';
import { SharePages } from '../pages/sharePages';
import { AbstractPage } from '../pages/abstractPage';

describe('Matrix Page Social share buttons, hamburger menu:', () => {
  beforeAll(() => {
    browser.get('https://www.gapminder.org/dollar-street/matrix');
    browser.wait(AbstractPage.getEC().not(AbstractPage.getEC().visibilityOf(AbstractPage.loader)), 40000);
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;
  });

  it('Check twitter', () => {
    MatrixPage.hamburgerMenu.click();

    MatrixPage.getShareButtonInHamburgerMenu('twitter').click().then(() => {

      browser.getAllWindowHandles().then((handles: any) => {
        browser.ignoreSynchronization = true;
        browser.sleep(1000); //TODO this is task for you: try to avoid :-)

        browser.switchTo().window(handles[1]).then(() => {
          expect(browser.getCurrentUrl()).toContain('https://twitter.com/intent/tweet?text=See%20how%20people%20really%20live%20-%20Dollar%20Street%20&url=https://is.gd/');
          expect(SharePages.inputFieldTwitter.getText()).toContain('See how people really live - Dollar Street  https://is.gd/');
          expect(SharePages.buttonPostOnTwitter.isDisplayed()).toBeTruthy();
        });

        browser.switchTo().window(handles[0]);
      });
    });
  });

  it('Check facebook', () => {
    MatrixPage.getShareButtonInHamburgerMenu('facebook').click().then(() => {

      browser.getAllWindowHandles().then((handles: any) => {
        browser.switchTo().window(handles[2]).then(() => {
          browser.ignoreSynchronization = true;
          browser.sleep(1000); //TODO this is task for you: try to avoid :-)

          expect(browser.getCurrentUrl()).toContain('https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fis.gd');
          expect(SharePages.headerFacebook.isDisplayed()).toBeTruthy();
          expect(SharePages.loginFacebook.isDisplayed()).toBeTruthy();
        });

        browser.switchTo().window(handles[0]);
      });
    });
  });

  it('Check linkedin', () => {
    MatrixPage.getShareButtonInHamburgerMenu('linkedin').click().then(() => {

      browser.getAllWindowHandles().then((handles: any) => {
        browser.switchTo().window(handles[3]).then(() => {
          browser.ignoreSynchronization = true;
          browser.sleep(1000); //TODO this is task for you: try to avoid :-)

          expect(SharePages.logoLinkedin.isDisplayed()).toBeTruthy();
          expect(browser.getCurrentUrl()).toContain('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%252F%252Fis%252Egd');
          expect(SharePages.logInLinkedin.isDisplayed()).toBeTruthy();
        });

        browser.switchTo().window(handles[0]);
      });
    });
  });
});
