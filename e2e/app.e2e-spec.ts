import { browser, element, by } from 'protractor';

describe('App E2E Tests', function () {

  let expectedMsg = 'Call The Hill';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('.navbar-brand')).getText()).toEqual(expectedMsg);
  });

});
