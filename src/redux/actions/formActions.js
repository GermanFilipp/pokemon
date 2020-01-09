import { all, call, put, takeEvery } from "redux-saga/effects";
import callApi from "utils/callApi";
import * as constants from "redux/constants";

// Action Creators
export function fetchPokemonSettings(payload) {
  return { type: constants.FETCH_POKEMON_SETTINGS, payload };
}

export function fetchPokemonSettingsSuccess(payload) {
  return { type: constants.FETCH_POKEMON_SETTINGS_SUCCESS, payload };
}

export function fetchPokemonSettingsFail(payload) {
  return { type: constants.FETCH_POKEMON_SETTINGS_FAILURE, payload };
}

// Requests
export function requestFetchStat() {
  return callApi("/stat?offset=0&limit=40");
}
export function requestFetchAbility() {
  return callApi("/ability?offset=0&limit=40");
}
export function requestFetchHeldItems() {
  return callApi("/item?offset=0&limit=40");
}

// Saga
function* fetchPokemonSettingsSaga() {
  try {
    const { stats, heldItems, abilities } = yield all({
      stats: call(requestFetchStat),
      heldItems: call(requestFetchHeldItems),
      abilities: call(requestFetchAbility)
    });
    yield put(fetchPokemonSettingsSuccess({ stats, heldItems, abilities }));
  } catch (err) {
    yield put(fetchPokemonSettingsFail(err.data));
  }
}

export function* formActionsSaga() {
  yield takeEvery(constants.FETCH_POKEMON_SETTINGS, fetchPokemonSettingsSaga);
}
