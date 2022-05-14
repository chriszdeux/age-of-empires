import axios from 'axios';

const url = 'http://localhost:8000/units';

export const fetchUnits = async () => {
  const data = await axios.get(url).then(response => {
    const { data: { units } } = response
    return units

  }).catch(err => {
    const { request:{ status }, message } = err
    return { status, message }
  })
  return data
}