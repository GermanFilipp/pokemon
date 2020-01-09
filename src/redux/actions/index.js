import { all } from "redux-saga/effects";
import { pokemonesSaga } from "./pokedexActions";
import { formActionsSaga } from "./formActions";

export function* rootSaga() {
  yield all([pokemonesSaga(), formActionsSaga()]);
}
