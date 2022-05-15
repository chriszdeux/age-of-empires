import { types } from "../types/types";

const initialState = {
  loading:true,
  error: false,
  data: []
}

export const storeStructuresReducer = ( state = initialState, action ) => {
  // debugger
  switch (action.type) {
    case types.store_structures:
      return { ...action.payload }

    case types.delete_store_structures:
      return initialState
    default:
      return state
  }
}