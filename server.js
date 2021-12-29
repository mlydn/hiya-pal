const app = require('./app.js')
const port = 8000
const host = '0.0.0.0'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})
