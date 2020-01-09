import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import createEncryptor from "redux-persist-transform-encrypt";
import { rootSaga } from "../actions";
import reducers from "../reducers";

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const logger = createLogger({
  collapsed: true,
  duration: true
});

const encryptor = createEncryptor({
  secretKey: "my-super-secret-key",
  onError(error) {
    console.log(error);
  }
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor]
};
const persistedReducer = persistReducer(persistConfig, reducers);

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  middleware.push(logger);
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const configureStore = () => {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers", () => {
        store.replaceReducer(persistReducer(persistConfig, reducers));
      });
    }
  }

  return { store, persistor };
};

export default configureStore;
