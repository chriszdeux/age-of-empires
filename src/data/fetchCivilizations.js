import axios from 'axios';

const url = 'https://age-of-empire.herokuapp.com/civilizations';

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