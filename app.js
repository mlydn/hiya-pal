//Require module
const express = require('express');
// Express Initialize
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//create api
app.get('/hiya_pal', (req,res)=>{
  res.json({ message: 'Hiya Pal!' });
})

app.get('/pal/:name', (req, res)=>{
  res.json({ message: 'Hiya ' + capitalizeFirstLetter(req.params.name) + '!'});
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = app
