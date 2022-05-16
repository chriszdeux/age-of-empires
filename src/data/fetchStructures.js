import axios from 'axios';

const url = 'https://age-of-empire.herokuapp.com/structures';

export const fetchStructures = async () => {
  const data = await axios.get(url).then(response => {
    const { data: { structures } } = response;
    return structures

  }).catch(err => {
    const { request:{ status }, message } = err
    return { status, message }
  })
  return data
}