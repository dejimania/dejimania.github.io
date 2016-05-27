'use strict';


describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for home/);
    });

  });


  describe('register', function() {

    beforeEach(function() {
      browser.get('index.html#/register');
    });


    it('should render register when user navigates to /register', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for register/);
    });

  });
  
  describe('addPost', function() {

    beforeEach(function() {
      browser.get('index.html#/addPost');
    });


    it('should render addPost when user navigates to /addPost', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for addPost/);
    });

  });
  
  describe('welcome', function() {

    beforeEach(function() {
      browser.get('index.html#/welcome');
    });


    it('should render welcome when user navigates to /welcome', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for welcome/);
    });

  });
});
