
export class NumbersListController {
  constructor(numbersModel) {
    this.numbersModel = numbersModel;
    
    this.numbers = null;
    this.activated = false;

    this.activate();
  }

  /**
   * Handles complex onload operations, such as retrieving data from the server.
   */
  activate() {
    this.numbersModel.getAll()
      .then(numbers => {
        this.numbers = numbers;
        this.activated = true;
      })
  }
}
NumbersListController.$inject = ['numbersModel'];