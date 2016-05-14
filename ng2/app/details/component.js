// AngularJS component
import template from './template.html!text';
import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import {NumbersDetailsController} from './controller.js';

export const NumbersDetailsComponent = Component({
  selector: 'numbers-details',
  template: template,
  inputs: ['number'],
  directives: [UIROUTER_DIRECTIVES]
}).Class({constructor: NumbersDetailsController});

export const NumbersDetailsHeaderComponent = Component({
  selector: 'numbers-details-header',
  template: `<h1>Numbers - {{number.id}}</h1>`,
  inputs: ['number']
}).Class({constructor: function() {}});
