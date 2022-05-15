import { types } from "../types/types";

const initialState = {
  loading:true,
  error: false,
  data: []
}

export const storeTechnologiessReducer = ( state = initialState, action ) => {
  // debugger
  switch (action.type) {
    case types.store_technologies:
      return { ...action.payload }

    case types.delete_store_technologies:
      return initialState
    default:
      return state
  }
}