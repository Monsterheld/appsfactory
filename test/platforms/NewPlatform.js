import {Page} from '../pages/Page';

class NewPlatformClass extends Page {
  open() {
    const url = 'ab-in-den-urlaub.de';
    const subDomain = 'go';
    const parameter = '/?force-split';

    browser.setWindowSize(375, 812);
    browser.url(`https://${url}`);

    browser.deleteAllCookies();
    browser.addCookie({
      name: 'autotest',
      value: '1',
      domain: '.ab-in-den-urlaub.de',
    });
    browser.addCookie({
      name: 'h0gw4rt5',
      value:
        '%7B%22c%22%3A%22gry%22%2C%22h%22%3A%2268a9f5688a740c2a0f5e81b18a95dc9a57ae19bb877807891f68eccd3aaa2b1b%22%2C%22r%22%3A0%7D',
      domain: '.ab-in-den-urlaub.de',
    });
    browser.addCookie({
      name: 'CookieConsent',
      value: `{stamp:'b1yLghIIiAPh34hMrMzoORtpkLE5a70h2WSKnily4f8zMz0CGPW9ww=='%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1575536018595}`,
      domain: '.ab-in-den-urlaub.de',
    });

    browser.url(`https://${subDomain}.${url}${parameter}`);
  }
}

export const NewPlatform = new NewPlatformClass();
