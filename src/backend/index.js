const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8000;
const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

app.use(cors());



app.get('./', (req, res) => {
  res.send( 'Up' )
});
app.get('./civilizations', async (req, res) => {
  const data = await axios.get(`${url}/civilizations`).then(response => {
    // console.log(response.data)
    return response.data
  })

  res.json(data)
});
app.get('./civilization/:id', async (req, res) => {

  const { id } = req.params
  console.log(id)
  const data = await axios.get(`${url}/civilization/${id}`).then(response => {
    console.log(response.data)
    return response.data
  })

  res.json(data)
});

app.get('./units', async (req, res) => {
  const data = await axios.get(`${url}/units`).then(response => {
    // console.log(response.data)
    return response.data
  })

  res.json(data)
})


app.get('./structures', async (req, res) => {
  const data = await axios.get(`${url}/structures`).then(response => {
    // console.log(response.data)
    return response.data
  })

  res.json(data)
})


app.get('./technologies', async (req, res) => {
  const data = await axios.get(`${url}/technologies`).then(response => {
    // console.log(response.data)
    return response.data
  })

  res.json(data)
})


app.listen( port, (req, res) => {
  console.log(`app running on port ${ port }`)
} )