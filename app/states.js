// Imports all of the ui-router states for the application and exports them as a single array
import {listState} from './list/state.js';
import {detailsState} from './details/state.js';

export const states = [
  listState, 
  detailsState
];
