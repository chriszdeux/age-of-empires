import { types } from "../types/types";

const initialState = {
  loading:true,
  error: false,
  data: []
}

export const storeUnitsReducer = ( state = initialState, action ) => {
  // debugger
  switch (action.type) {
    case types.store_units:
      return { ...action.payload }

    case types.delete_store_units:
      return initialState
    default:
      return state
  }
}