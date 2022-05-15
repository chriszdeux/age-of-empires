import { types } from "../types/types"

export const addCivilization = ( data ) => {

  return {
    type: types.add_civilization,
    payload: data
  }
}

export const delCivilization = ( data ) => {
  return {
    type: types.remove_civilization,
    payload: data
  }
}

export const storeCivilizations = ( data ) => {
  return {
    type: types.store_civilizations,
    payload: data
  }
}

export const deleteStoreCivilizations = (  ) => {
  return {
    type: types.delete_store_civilizations,
    payload: []
  }
}