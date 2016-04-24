// AngularJS component
import template from './template.html!text';

export const numbersDetailsComponent = {
  template: template,
  controller: 'NumbersDetailsController',
  bindings: {number: '<'}
};

export const numbersDetailsHeaderComponent = {
  template: `<h1>Numbers - {{$ctrl.number.id}}</h1>`,
  controller: function() {},
  bindings: {number: '<'}
};
