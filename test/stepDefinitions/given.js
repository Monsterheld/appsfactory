import {Given} from 'cucumber';
import assert from 'assert';
import {NewPlatform} from '../platforms/NewPlatform';

Given(/^I am at the new platform$/, () => {
  NewPlatform.open();
  const url = NewPlatform.getUrl();
  assert.equal(url, `https://go.ab-in-den-urlaub.de/?force-split`);
});
