import { combineReducers, createStore } from "redux";

import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { civilizationReducer } from "../reducers/civilizationReducer";
import { unitsReducer } from "../reducers/unitsReducer";
import { storeCivilizationsReducer } from "../reducers/storeCivilizationsReducer";
import { storeUnitsReducer } from "../reducers/storeUnitsReducer";
import { structureReducer } from "../reducers/structureReducer";
import { storeStructuresReducer } from "../reducers/storeStructuresReducer";
import { technologyReducer } from "../reducers/technologyReducer";
import { storeTechnologiessReducer } from "../reducers/storeTechnologiesReducer";
const persistConfig = {
  key: 'main-root',
  storage
}


const reducers = combineReducers({
  add_civilization_reducer: civilizationReducer,
  store_civilizations_reducer: storeCivilizationsReducer,

  add_unit_reducer: unitsReducer,
  store_units_reducer: storeUnitsReducer,

  add_structure_reducer: structureReducer,
  store_structures_reducer: storeStructuresReducer,

  add_technology_reducer: technologyReducer,
  store_technologies_reducer: storeTechnologiessReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware
  )

export const persist_store = persistStore(store)