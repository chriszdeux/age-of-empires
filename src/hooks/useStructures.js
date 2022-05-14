import { useEffect, useState } from "react"
import { fetchStructures } from "../data/fetchStructures"

export const useStructures = () => {
  const [data, setData] = useState({
    loading: true,
    error: false,
    error_message: '',
    data: []
  })
  useEffect(() => {
    fetchStructures()
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