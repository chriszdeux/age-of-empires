import { types } from "../types/types";

// const initialState = {
//   loading:true,
//   error: false,
//   data: []
// }

export const technologyReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case types.add_technology:
      if(state.find( item => item.id === action.payload.id )) {
        
      }
      return [{...action.payload}, ...state];
    case types.remove_technology:
      return state.filter(item => {
        return item.id !== action.payload
      })

    default:
      return state
  }
}