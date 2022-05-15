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

export const saveCivilizations = ( data ) => {
  return {
    type: types.save_civilizations,
    payload: data
  }
}

export const removeCivilizations = (  ) => {
  return {
    type: types.remove_civilization,
    payload: []
  }
}