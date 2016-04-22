// Starting point for the application
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router/ng1.js';
import {states} from './states.js';
import {NumbersModel} from './model/numbers.js';
import {LoginModel} from './model/login.js';
import {numbersDetailsComponent} from './details/component.js';
import {NumbersDetailsController} from './details/controller.js';
import {numbersListComponent} from './list/component.js';
import {NumbersListController} from './list/controller.js';
import {LoginModal} from './login/service.js';
import {NumbersLoginController} from './login/controller.js';

export const numbersAppModule = angular.module('numbersApp', [uiBootstrap, uiRouter])
  .service('numbersModel', NumbersModel)
  .service('loginModel', LoginModel)
  .component('numbersDetails', numbersDetailsComponent)
  .controller('NumbersDetailsController', NumbersDetailsController)
  .component('numbersList', numbersListComponent)
  .controller('NumbersListController', NumbersListController)
  .service('numbersLoginModal', LoginModal)
  .controller('NumbersLoginController', NumbersLoginController)
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/numbers');
    states.forEach(s => $stateProvider.state(s));
  }]);

export function bootstrap() {
  angular.bootstrap(document.body, [numbersAppModule.name], {strictDi: true})
}