import { types } from "../types/types";

// const initialState = {
//   loading:true,
//   error: false,
//   data: []
// }

export const unitsReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case types.add_unit:
      if(state.find( item => item.id === action.payload.id )) {
        
      }
      return [{...action.payload}, ...state];
    case types.remove_unit:
      return state.filter(item => {
        return item.id !== action.payload
      })
    default:
      return state
  }
}