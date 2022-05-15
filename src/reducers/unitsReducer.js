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
        return state
      }
      return [{...action.payload, like: true }, ...state];
    case types.remove_unit:
      return state.filter(item => {
        return item.name !== action.payload
      })
    default:
      return state
  }
}