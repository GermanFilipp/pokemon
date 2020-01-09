import { combineReducers } from "redux";

import pokedexReducer from "./pokedexReducer";
import pokemonLineupReducer from "./pokemonLineupReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  pokemonLineup: pokemonLineupReducer,
  form: formReducer
});

export default rootReducer;
