const express = require('express')

const app = express()

let val = 0;

app.get('/', function (req, res) {
  res.send(`${val++}`);
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
});