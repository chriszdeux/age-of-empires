import { types } from "../types/types"

export const addStructure = ( data ) => {

  return {
    type: types.add_structure,
    payload: data
  }
}

export const removeStructure= ( data ) => {
  return {
    type: types.remove_structure,
    payload: data
  }
}

export const storeStructures = ( data ) => {
  return {
    type: types.store_structures,
    payload: data
  }
}

export const deleteStoreStructures = (  ) => {
  return {
    type: types.delete_store_structures,
    payload: []
  }
}