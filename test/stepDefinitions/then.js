import {Then} from 'cucumber';
import assert from 'assert';

import {Search} from '../pages/Search';
import {Find} from '../pages/Find';

Then(/^I am at '(.*)'$/, url => {
  assert.strictEqual(url, browser.getUrl());
});

Then(/^I click on '(.*)' travel target box$/, travelTarget => {
  Search.clickOnATravelTarget(travelTarget);
});

Then('I am on the find page', () => {
  Find.waitForPageRenderAndCheckTheUrl();
});
