// AngularJS component
import template from './template.html!text';
import {Component} from 'angular2/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import {NumbersListController} from './controller.js';

export const NumbersListComponent = Component({
  selector: 'numbers-list',
  template: template,
  directives: [UIROUTER_DIRECTIVES]
}).Class({constructor: NumbersListController});

export const NumbersListHeaderComponent = Component({
  selector: 'numbers-list-header',
  template: `<h1>Numbers</h1>`
}).Class({constructor: function() {}});
