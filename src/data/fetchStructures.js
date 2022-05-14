import axios from 'axios';

const url = 'http://localhost:8000/structures';

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