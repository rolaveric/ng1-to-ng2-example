// Imports all of the ui-router states for the application and exports them as a single array
import {getListState} from './list/state.js';
import {getDetailsState} from './details/state.js';

// We export a factory function that always returns new state objects
// because ui-router will mutate those objects, which can cause
// issues for unit tests.
export function getStates() {
  return [
    getListState(),
    getDetailsState()
  ];
}

