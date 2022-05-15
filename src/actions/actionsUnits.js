import { types } from "../types/types"

export const addUnit = ( data ) => {

  return {
    type: types.add_unit,
    payload: data
  }
}

export const removeUnit = ( data ) => {
  return {
    type: types.remove_unit,
    payload: data
  }
}

export const storeUnits = ( data ) => {
  return {
    type: types.store_units,
    payload: data
  }
}

export const deleteStoreUnits = (  ) => {
  return {
    type: types.delete_store_units,
    payload: []
  }
}