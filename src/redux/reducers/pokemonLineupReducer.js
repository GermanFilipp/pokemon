import filter from "lodash.filter";
import * as constants from "../constants";

const defaultState = {
  pokemons: {},
  pokemonsIds: [],
  editedPokemonId: null
};

export default function pokemonLineupReducer(
  state = defaultState,
  { type, payload }
) {
  switch (type) {
    case constants.ADD_TO_LINEUP:
      if (state.pokemons[payload.id]) return state;
      return {
        ...state,
        pokemonsIds: [...state.pokemonsIds, payload.id],
        pokemons: {
          ...state.pokemons,
          [payload.id]: payload
        }
      };
    case constants.REMOVE_FROM_LINEUP:
      const { pokemons } = state;
      delete pokemons[payload];
      return {
        ...state,
        pokemons,
        pokemonsIds: filter(state.pokemonsIds, val => val !== payload),
        editedPokemonId:
          state.editedPokemonId === payload ? null : state.editedPokemonId
      };
    case constants.EDIT_LINEUP:
      return {
        ...state,
        editedPokemonId: payload
      };
    case constants.SAVE_EDITED_LINEUP:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [payload.id]: payload
        }
      };
    case constants.CLEAR_POKEMON_FORM:
      return {
        ...state,
        editedPokemonId: null
      };
    default:
      return state;
  }
}
