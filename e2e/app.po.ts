import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  makepause() {
    return browser.sleep(20000);
  }

  getButtonBarTitle() {
    return element(by.css('h3')).getText();
  }

  getParagraphText() {
    return element(by.css('operator-root h1')).getText();
  }
}
