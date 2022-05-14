import axios from 'axios';

const url = 'http://localhost:8000/civilizations';

export const fetchCivilizations = async () => {
  const data = await axios.get(url).then(response => {
    const { data: { civilizations } } = response
    return civilizations
    
  }).catch(err => {
    const { request:{ status }, message } = err
    return { status, message }
  })
  return data
}