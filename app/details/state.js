// ui-router state for the details view
export const detailsState = {
  name: 'numbers-list.details',
  url: '/:numberId',
  component: 'numbersDetails',
  resolve: {
    number: ['$stateParams', 'numbersModel', ($stateParams, numbersModel) => numbersModel.getNumber(Number($stateParams.numberId))]
  }
};
