import { useEffect, useRef, useState } from "react"
import { fetchCivilizations } from "../data/fetchCivilizations";

export const useCivilizations = () => {
  const [data, setData] = useState({
    loading: true,
    error: false,
    error_message: '',
    data: []
  })
  useEffect(() => {
    fetchCivilizations()
      .then(item => {
        if(item.status && item.status === 404) {
         setData({
           loading: false,
           error: true,
           error_message: item.message,
           data: []
         })
       } 
        else {
          setData({
            loading: false, 
            error: false,
            error_message: '',
            data: item
          })
        }
      })
    }, [  ])
    
    return data
}