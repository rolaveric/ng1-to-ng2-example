import {LoginModel} from '../model/login.js';
import {NumbersModel} from '../model/numbers.js';

export class NumbersDetailsController {
  static get parameters() {
    return [[LoginModel], [NumbersModel]];
  }

  /**
   *
   * @param loginModel {LoginModel}
   * @param numbersModel {NumbersModel}
   */
  constructor(loginModel, numbersModel) {
    this.loginModel = loginModel;
    this.numbersModel = numbersModel;
    
    this.isLoggedIn = !!this.loginModel.username;
    this.newCommentContent = '';
  }

  /**
   * Handles 'submit' events for the new comment form.
   */
  newCommentFormSubmitted() {
    this.numbersModel.addComment(this.number, this.loginModel.username, this.newCommentContent)
      .subscribe();
    this.newCommentContent = '';
  }

  /**
   * Handles click events for the 'Login' link.
   * @param $event {object}
   */
  loginLinkClicked($event) {
    $event.preventDefault();

    //this.numbersLoginModal.open().result.then(() => this.isLoggedIn = !!this.loginModel.username);
    console.log('TODO: Create modal component');
    this.isLoggedIn = true;
    this.loginModel.username = 'Test User';
  }
}
