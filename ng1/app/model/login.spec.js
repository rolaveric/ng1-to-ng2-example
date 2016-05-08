import angular from 'angular';
import 'angular-mocks';
import {numbersAppModule} from '../index.js';

describe('loginModel', function() {
  beforeEach(angular.mock.module(numbersAppModule.name));

  describe('login()', function() {
    var loginModel, $httpBackend;
    beforeEach(inject(function(_loginModel_, _$httpBackend_) {
      loginModel = _loginModel_;
      $httpBackend = _$httpBackend_;
    }));

    it('POSTs login request to server', function() {
      $httpBackend.expectPOST('/api/v1/login').respond(200, {username: 'meep'});
      loginModel.login('meep', 'nereek');
    });

    it('Then attaches username to model', function() {
      $httpBackend.expectPOST('/api/v1/login').respond(200, {username: 'meep'});
      loginModel.login('meep', 'nereek');
      $httpBackend.flush();
      expect(loginModel.username).toBe('meep');
    });
  });
});