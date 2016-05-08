import {NumbersModel} from '../model/numbers.js';

export class NumbersListController {
  static get parameters() {
    return [[NumbersModel]];
  }

  constructor(numbersModel) {
    this.numbersModel = numbersModel;
    
    this.numbers = null;
    this.activated = false;
    this.selectedNumber = null;

      this.activate();
  }

  /**
   * Handles complex onload operations, such as retrieving data from the server.
   */
  activate() {
    this.numbersModel.getAll()
      .subscribe(numbers => {
        this.numbers = numbers;
        this.activated = true;
      })
  }

  onStateStatus(stateEvent, number) {
    if (stateEvent.active) {
      this.selectedNumber = number;
    }
  }
}
