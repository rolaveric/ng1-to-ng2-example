import {NumbersDetailsComponent, NumbersDetailsHeaderComponent} from './component.js';

const resolveNumber = (a, b) => a.getNumber(Number(b.params().numberId)).toPromise();
resolveNumber.$inject = ['numbersModel', '$transition$'];

// ui-router state for the details view
export function getDetailsState() {
  return {
    name: 'numbers-list.details',
    url: '/:numberId',
    resolve: {
      number: resolveNumber
    },
    views: {
      header: {component: NumbersDetailsHeaderComponent},
      content: {component: NumbersDetailsComponent}
    }
  };
}
