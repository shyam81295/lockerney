import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for lockerney', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be lockerney', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('lockerney');
    })
  });

  it('navbar-brand should be lockerney@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('lockerney@0.0.1');
  });

  
    it('UserDataPackage component should be loadable',() => {
      page.navigateTo('/UserDataPackage');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('UserDataPackage');
    });

    it('UserDataPackage table should have 13 columns',() => {
      page.navigateTo('/UserDataPackage');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(13); // Addition of 1 for 'Action' column
      });
    });

  
    it('UserServicePair component should be loadable',() => {
      page.navigateTo('/UserServicePair');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('UserServicePair');
    });

    it('UserServicePair table should have 5 columns',() => {
      page.navigateTo('/UserServicePair');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  

});
