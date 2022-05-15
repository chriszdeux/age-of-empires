import { types } from "../types/types";

// const initialState = {
//   loading:true,
//   error: false,
//   data: []
// }

export const civilizationsReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case types.add_civilization:
      if(state.find( item => item.id === action.payload.id )) {
        
      }
      return [{...action.payload}, ...state];
    case types.remove_civilization:
      return state.filter(item => {
        return item.id !== action.payload
      })

    case types.save_civilizations:
      return { ...action.payload }

    case types.delete_civilizations:
      return {}
    default:
      return state
  }
}