import { types } from "../types/types";

const initialState = {}
export const handleDataReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.handle_data:
      return action.payload
    default:
      return state
  }
}