import assert from 'assert';
import moment from 'moment';
import {Page} from './Page';
import {Store} from '../store/Store';

class FindClass extends Page {
  getQueryForParams(rawData) {
    const destinationId = rawData.find(value => value[0] === 'destinationId');
    const departures = rawData.find(value => value[0] === 'departures');
    const adults = rawData.find(value => value[0] === 'adults');
    const minDuration = rawData.find(value => value[0] === 'minDuration');
    const maxDuration = rawData.find(value => value[0] === 'maxDuration');
    const children = rawData.find(value => value[0] === 'children');
    if (!destinationId) {
      assert.fail('destinationId not set');
    }
    if (!departures) {
      assert.fail('departures not set');
    }
    if (!adults) {
      assert.fail('adults not set');
    }
    if (!minDuration) {
      assert.fail('minDuration not set');
    }
    if (!maxDuration) {
      assert.fail('maxDuration not set');
    }
    if (children) {
      Store.setSearchStore({
        children: children[1],
        adults: adults[1],
      });
    }

    let query = '';
    rawData.map((value, key) => {
      const tmp = value.join('=');
      if (key === 0) {
        query = tmp;
      } else {
        query = `${query}&${tmp}`;
      }
    });

    const start = moment(new Date());
    const startDate = start.add(100, 'days').format('YYYY-MM-DD');
    const endDate = start.add(114, 'days').format('YYYY-MM-DD');

    return `${query}&startDate=${startDate}&endDate=${endDate}`;
  }

  goTo(query) {
    browser.url(`https://go.ab-in-den-urlaub.de/find?force-split&${query}`);
  }

  checkForNecessaryQueryParams() {
    const query = this.getUrl().split('find?')[1];
    return (
      query.includes('destinationId') &&
      query.includes('departures') &&
      query.includes('adults') &&
      query.includes('minDuration') &&
      query.includes('maxDuration') &&
      query.includes('startDate') &&
      query.includes('endDate')
    );
  }

  goToMap() {
    const mapTrigger = $('[data-cy=map-snippet]');
    mapTrigger.waitForDisplayed(this.timeout);
    mapTrigger.click();

    const mapUrl = this.getUrl();
    mapUrl.should.contains('#mapview');
  waitForPageRenderAndCheckTheUrl() {
    this.selectAndGetElement('.progress-gauge__text');
    this.getUrl().should.contains('https://go.ab-in-den-urlaub.de/find');
  }
}

export const Find = new FindClass();
