import { useEffect, useState } from "react"

export const useRandomColor = ( value ) => {
  const [randomColor, setRandomColor] = useState('')
  const [colorBorder, setColorBorder] = useState({})
  const [bottomBorder, setBottomBorder] = useState({})
  const handleRandomColor = () => {
    setRandomColor( (Math.floor(Math.random()*16777215) + 1000000).toString(16))
  }

  useEffect(() => {
    setColorBorder({
      boxShadow: `0 0 7px 1px #${ randomColor }`,
      outline: `1px solid #${randomColor}`
    })
  }, [ randomColor ])

  useEffect(() => {
    setBottomBorder({
      borderBottom: `1px solid #${ randomColor }`,
      boxShadow: `0 18px 9px -18px #${ randomColor }`
    })
  }, [ randomColor ])

  return {colorBorder, bottomBorder, handleRandomColor}
}