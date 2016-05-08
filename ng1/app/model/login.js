// Model for handling login
export class LoginModel {
  constructor($http) {
    this.$http = $http;
    this.username = null;
  }

  /**
   * Handles login.
   * @param username {string}
   * @param password {string}
   * @returns {Promise}
   */
  login(username, password) {
    return this.$http.post('/api/v1/login', {username: username, password: password})
      .then(() => this.username = username);
  }
}
LoginModel.$inject = ['$http'];
