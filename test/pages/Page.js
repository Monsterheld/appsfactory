export class Page {
  timeout = 3000;

  getUrl(): string {
    return browser.getUrl();
  }

  selectAndGetElement(selector, timeout = this.timeout) {
    const element = $(selector);
    element.waitForDisplayed(timeout);
    return element;
  }

  clickElement(selector, timeout = this.timeout) {
    const element = this.selectAndGetElement(selector);
    element.waitForClickable({timeout});
    element.click();
  }
}
