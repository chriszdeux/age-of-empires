import axios from 'axios';

const url = 'https://age-of-empire.herokuapp.com/units';

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