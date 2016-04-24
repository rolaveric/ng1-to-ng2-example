// ui-router state for the details view
export function getDetailsState() {
  return {
    name: 'numbers-list.details',
    url: '/:numberId',
    resolve: {
      number: [
        '$stateParams', 'numbersModel',
        ($stateParams, numbersModel) => numbersModel.getNumber(Number($stateParams.numberId))
      ]
    },
    views: {
      header: {component: 'numbersDetailsHeader'},
      content: {component: 'numbersDetails'}
    }
  };
}
