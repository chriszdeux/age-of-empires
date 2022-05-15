import { types } from "../types/types";

// const initialState = {
//   loading:true,
//   error: false,
//   data: []
// }

export const structureReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case types.add_structure:
      if(state.find( item => item.id === action.payload.id )) {
        
      }
      return [{...action.payload}, ...state];
    case types.remove_structure:
      return state.filter(item => {
        return item.id !== action.payload
      })

    default:
      return state
  }
}