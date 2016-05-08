import {NumbersListComponent, NumbersListHeaderComponent} from './component.js';

// ui-router state for the list view
export function getListState() {
  return {
    name: 'numbers-list',
    url: '/numbers',
    views: {
      '': {component: NumbersListComponent},
      'header@numbers-list': {component: NumbersListHeaderComponent}
    }
  };
}
