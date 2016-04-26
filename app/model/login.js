import {Class} from 'angular2/core';
import {Http} from 'angular2/http';

// Model for handling login
export class LoginModel {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;
    this.username = null;
  }

  /**
   * Handles login.
   * @param username {string}
   * @param password {string}
   * @returns {Promise}
   */
  login(username, password) {
    return this.http.post('/api/v1/login', {username: username, password: password})
      .subscribe(() => this.username = username);
  }
}

export const LoginModelProvider = Class({constructor: LoginModel});
