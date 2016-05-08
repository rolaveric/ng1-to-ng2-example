
export class NumbersLoginController {
  constructor(loginModel, $location, $uibModalInstance) {
    this.loginModel = loginModel;
    this.$location = $location;
    this.$uibModalInstance = $uibModalInstance;
    
    this.username = "";
    this.password = "";
  }

  /**
   * Handles 'submit' events for the login form.
   */
  loginFormSubmitted() {
    this.loginModel.login(this.username, this.password)
      .then(() => this.$uibModalInstance.close())
  }

  /**
   * Handles click events for the cancel button.
   */
  cancelClicked() {
    this.$uibModalInstance.close();
  }
}
NumbersLoginController.$inject = ['loginModel', '$location', '$uibModalInstance'];
