import { normalizeSettingsResult } from "utils/normalizer";
import * as constants from "../constants";

const defaultState = {
  stats: [],
  heldItems: [],
  abilities: [],
  loaded: false
};

export default function formReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case constants.FETCH_POKEMON_SETTINGS_SUCCESS:
      return { ...state, ...normalizeSettingsResult(payload), loaded: true };
    case constants.FETCH_POKEMON_SETTINGS_FAILURE:
    case constants.FETCH_POKEMON_SETTINGS:
    default:
      return state;
  }
}
