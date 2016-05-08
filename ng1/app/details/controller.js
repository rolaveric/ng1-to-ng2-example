
export class NumbersDetailsController {
  constructor(loginModel, numbersModel, $location, numbersLoginModal) {
    this.loginModel = loginModel;
    this.numbersModel = numbersModel;
    this.numbersLoginModal = numbersLoginModal;
    
    this.isLoggedIn = !!this.loginModel.username;
    this.newCommentContent = "";
    this.currentUrl = $location.url();
  }

  /**
   * Handles 'submit' events for the new comment form.
   */
  newCommentFormSubmitted() {
    this.numbersModel.addComment(this.number.id, this.loginModel.username, this.newCommentContent);
    this.newCommentContent = "";
  }

  /**
   * Handles click events for the 'Login' link.
   * @param $event {object}
   */
  loginLinkClicked($event) {
    $event.preventDefault();

    this.numbersLoginModal.open().result.then(() => this.isLoggedIn = !!this.loginModel.username);
  }
}
NumbersDetailsController.$inject = ['loginModel', 'numbersModel', '$location', 'numbersLoginModal'];
