// ui-router state for the list view
export function getListState() {
  return {
    name: 'numbers-list',
    url: '/numbers',
    views: {
      '': {component: 'numbersList'},
      'header@numbers-list': {component: 'numbersListHeader'}
    }
  };
}
