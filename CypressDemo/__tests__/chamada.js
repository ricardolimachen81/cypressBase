const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
})

describe('Teste de método Get - API', function(){
  it('deve checar o endpoint', function(){
    return frisby.get('http://httpbin.org/status/418')
    .inspectBody()
    .expect('status', 418)
  })
})
//http://httpbin.org/image/jpeg
//http://httpbin.org/status/418