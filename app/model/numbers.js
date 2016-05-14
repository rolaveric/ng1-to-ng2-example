import {Class} from '@angular/core';
import {Http} from '@angular/http';

// Model object for accessing numbers data
export class NumbersModel {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;

    this.getAllObservable = this.http.get('/api/v1/numbers')
      .map(r => r.json())
  }

  /**
   * Returns a promise for all numbers data
   * @returns {Observable.<object[]>}
   */
  getAll() {
    return this.getAllObservable.share();
  }

  /**
   * Returns a promise for a particular number's data
   * @param id {number}
   * @returns {Observable.<object>}
   */
  getNumber(id) {
    return this.getAll()
      .map(all => all.find(n => n.id === id));
  }

  /**
   * Adds a comment to a number.
   * @param number {object}
   * @param username {string}
   * @param content {string}
   * @returns {Promise}
   */
  addComment(number, username, content) {
    number.comments = [
      {author: username, timestamp: new Date().toJSON(), content: content},
      ...number.comments
    ];
    return this.http.post(`/api/v1/numbers/${number.id}/comments`, number.comments[0]);
  }
}
Class({constructor: NumbersModel});
