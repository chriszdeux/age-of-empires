import { useEffect, useState } from "react"
import { fetchTechnologies } from "../data/fetchTechnologies"

export const useTechnologies = () => {
  const [data, setData] = useState({
    loading: true,
    error: false,
    error_message: '',
    data: []
  })
  useEffect(() => {
    fetchTechnologies()
      .then(item => {
        if(item.status && item.status === 404) {
        //  debugger
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
          // debugger
        }
      })
    }, [  ])
    // debugger
    
    return data
}