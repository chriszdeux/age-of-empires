import { types } from "../types/types";

const initialState = {
  loading:true,
  error: false,
  data: []
}

export const dataCivilizationsReducer = ( state = initialState, action ) => {
  // debugger
  switch (action.type) {
    case types.save_civilizations:
      return { ...action.payload }

    case types.delete_civilizations:
      return initialState
    default:
      return state
  }
}