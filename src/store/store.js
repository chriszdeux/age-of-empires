import { combineReducers, createStore } from "redux";

import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { civilizationsReducer } from "../reducers/civilizationsReducer";
const persistConfig = {
  key: 'main-root',
  storage
}


const reducers = combineReducers({
  civilizations_reducer: civilizationsReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware
  )

export const persist_store = persistStore(store)