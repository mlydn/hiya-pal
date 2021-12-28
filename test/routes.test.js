const request = require('supertest')
const app = require('../app.js')

describe('GET Endpoints', () => {
  it('should GET a hiya pal', async () => {
    const res = await request(app)
      .get('/hiya_pal')
    expect(res.statusCode).toEqual(200)
    expected = "{\"message\":\"Hiya Pal!\"}"
    expect(res.text).toEqual(expected)
  })

  it('should GET a hiya bob', async () => {
    const res = await request(app)
      .get('/pal/bob')
    expect(res.statusCode).toEqual(200)
    expected = "{\"message\":\"Hiya Bob!\"}"
    expect(res.text).toEqual(expected)
  })
})
