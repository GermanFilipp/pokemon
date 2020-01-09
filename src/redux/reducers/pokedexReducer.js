import { normalizeSearchResult } from "utils/normalizer";
import * as constants from "../constants";

const defaultState = {
  searchablePokemonValue: null,
  pokemonSearchResult: null,
  fetchError: false
};

export default function pokedexReducer(
  state = defaultState,
  { type, payload }
) {
  switch (type) {
    case constants.FETCH_POKEMON:
      return {
        ...state,
        searchablePokemonValue: payload.values
      };
    case constants.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        fetchError: false,
        pokemonSearchResult: normalizeSearchResult(payload)
      };
    case constants.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        pokemonSearchResult: null,
        fetchError: true
      };
    case constants.CLEAR_POKEDEX:
      return {
        ...state,
        searchablePokemonValue: null,
        pokemonSearchResult: null,
        fetchError: false
      };
    default:
      return state;
  }
}
