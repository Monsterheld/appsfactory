import assert from 'assert';
import moment from 'moment';
import {Page} from './Page';

class SearchClass extends Page {
  clickOnATravelTarget(travelTarget) {
    const availableTargets = {
      kreta: 621,
      mallorca: 365,
      rhodos: 73,
    };

    if (!Object.keys(availableTargets).includes(travelTarget)) {
      assert.fail(`The travel target '${travelTarget}' is not defined.`);
    }

    this.clickElement(`[data-cy="search-suggestion-${availableTargets[travelTarget]}"`)
  }
}

export const Search = new SearchClass();
