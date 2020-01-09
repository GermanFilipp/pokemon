import { call, put, takeEvery } from "redux-saga/effects";
import callApi from "utils/callApi";
import * as constants from "../constants";

// Action Creators
export function fetchPokemon(payload) {
  return { type: constants.FETCH_POKEMON, payload };
}

export function fetchPokemonSuccess(payload) {
  return { type: constants.FETCH_POKEMON_SUCCESS, payload };
}

export function fetchPokemonFail(payload) {
  return { type: constants.FETCH_POKEMON_FAILURE, payload };
}

export function clearPokedex(_payload) {
  return { type: constants.CLEAR_POKEDEX };
}

// Requests
export function requestFetchPokemon(payload) {
  return callApi(`/pokemon/${payload.toLowerCase()}`);
}

// Saga
function* fetchPokemonSaga(action) {
  const { values, resolve, reject } = action.payload;

  try {
    const res = yield call(requestFetchPokemon, values);
    yield put(fetchPokemonSuccess(res));
    if (resolve) {
      resolve(res);
    }
  } catch (err) {
    yield put(fetchPokemonFail(err.data));
    if (reject) {
      reject(err.data);
    }
  }
}

export function* pokemonesSaga() {
  yield takeEvery(constants.FETCH_POKEMON, fetchPokemonSaga);
}
