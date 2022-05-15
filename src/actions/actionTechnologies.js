import { types } from "../types/types"

export const addTechnology = ( data ) => {

  return {
    type: types.add_technology,
    payload: data
  }
}

export const delTechnology = ( data ) => {
  return {
    type: types.remove_technology,
    payload: data
  }
}

export const storeTechnologies = ( data ) => {
  return {
    type: types.store_technologies,
    payload: data
  }
}

export const deleteStoreTechnologies = (  ) => {
  return {
    type: types.delete_store_technologies,
    payload: []
  }
}