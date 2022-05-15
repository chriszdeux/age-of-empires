import { types } from "../types/types";

const initialState = {
  loading:true,
  error: false,
  data: []
}

export const storeCivilizationsReducer = ( state = initialState, action ) => {
  // debugger
  switch (action.type) {
    case types.store_civilizations:
      return { ...action.payload }

    case types.delete_store_civilizations:
      return initialState
    default:
      return state
  }
}