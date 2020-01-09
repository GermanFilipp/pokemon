import * as constants from "../constants";

// Action Creators
export function addToLineup(payload) {
  return { type: constants.ADD_TO_LINEUP, payload };
}

export function removeFromLineup(payload) {
  return { type: constants.REMOVE_FROM_LINEUP, payload };
}

export function editLineup(payload) {
  return { type: constants.EDIT_LINEUP, payload };
}

export function saveEditedLineup(payload) {
  return { type: constants.SAVE_EDITED_LINEUP, payload };
}

export function clearForm() {
  return { type: constants.CLEAR_POKEMON_FORM };
}
