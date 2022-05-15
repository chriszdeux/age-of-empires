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
        return state
      }
      return [{...action.payload, like: true}, ...state];
    case types.remove_structure:
      return state.filter(item => {
        return item.name !== action.payload
      })

    default:
      return state
  }
}