import axios from 'axios';

const url = 'http://localhost:8000/technologies';

export const fetchTechnologies = async () => {
  const data = await axios.get(url).then(response => {
    const { data: { technologies } } = response
    // debugger
    return technologies

  }).catch(err => {
    return err.message
  })
  console.log(data);
  return data
}