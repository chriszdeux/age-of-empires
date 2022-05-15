import { types } from "../types/types"

export const actionHandleData = ( data ) => {
  return {
    type: types.handle_data,
    payload: data
  }
}