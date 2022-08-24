const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Node.js web app -- Mickaël')
  console.log(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})