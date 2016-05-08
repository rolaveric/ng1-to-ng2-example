import {LoginModel} from './login.js';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('LoginModel', function() {

  describe('login()', function() {
    var loginModel, http;
    beforeEach(function() {
      http = jasmine.createSpyObj('http', ['post']);
      http.post.and.returnValue(Observable.of(1));
      loginModel = new LoginModel(http);
    });

    it('POSTs login request to server', function() {
      loginModel.login('meep', 'nereek');
      expect(http.post).toHaveBeenCalledWith('/api/v1/login', {username: 'meep', password: 'nereek'});
    });

    it('Then attaches username to model', function() {
      loginModel.login('meep', 'nereek');
      expect(loginModel.username).toBe('meep');
    });
  });
});