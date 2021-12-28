//Require module
const express = require('express');
// Express Initialize
const app = express();

//create api
app.get('/hiya_pal', (req,res)=>{
  res.send('Hiya Pal!');
})

app.get('/pal/:name', (req, res)=>{
  res.send('Hiya ' + capitalizeFirstLetter(req.params.name) + '!');
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = app
