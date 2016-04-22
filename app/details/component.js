// AngularJS component
import template from './template.html!text';

export const numbersDetailsComponent = {
  template: template,
  controller: 'NumbersDetailsController',
  bindings: {number: '<'}
};
