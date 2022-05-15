import { useState } from "react"

export const useForm = ( initialState = {} ) => {
  const [inputValues, setInputValues] = useState( initialState )

  const handleOnChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]:target.value
    })
  }

  return { inputValues, handleOnChange }
}