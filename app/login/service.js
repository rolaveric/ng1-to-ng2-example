// AngularJS component
import template from './template.html!text';

export class LoginModal {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open() {
    return this.$uibModal.open({
      template: template,
      controller: 'NumbersLoginController',
      controllerAs: '$ctrl',
      bindToController: true
    });
  }
}
LoginModal.$inject = ['$uibModal'];
