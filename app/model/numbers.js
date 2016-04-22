// Model object for accessing numbers data
export class NumbersModel {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.data = null;
  }

  /**
   * Returns a promise for all numbers data
   * @returns {Promise.<object[]>}
   */
  getAll() {
    if (this.data) {
      return this.$q.resolve(this.data);
    }
    return this.$http.get('/api/v1/numbers')
      .then(res => this.data = res.data);
  }

  /**
   * Returns a promise for a particular number's data
   * @param id {number}
   * @returns {Promise.<object>}
   */
  getNumber(id) {
    return this.getAll()
      .then(all => all.find(n => n.id === id));
  }

  /**
   * Adds a comment to a number.
   * @param numberId {number}
   * @param username {string}
   * @param content {string}
   * @returns {Promise}
   */
  addComment(numberId, username, content) {
    return this.getNumber(numberId)
      .then(n => {
        if (!n) {
          return this.$q.reject(404);
        }
        n.comments.unshift({author: username, timestamp: new Date().toJSON(), content: content});
        return this.$http.post('/api/v1/numbers', n.comments[0]);
      });
  }
}
NumbersModel.$inject = ['$http', '$q'];
