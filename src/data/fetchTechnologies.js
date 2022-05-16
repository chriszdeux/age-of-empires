import axios from 'axios';

const url = 'https://age-of-empire.herokuapp.com/technologies';

export const fetchTechnologies = async () => {
  const data = await axios.get(url).then(response => {
    const { data: { technologies } } = response
    // debugger
    return technologies

  }).catch(err => {
    return err.message
  })
  return data
}