var http = require('http')
var Router = require('./router')

var router = new Router(function onNotFound (req, res) {
  res.statusCode = 404
  res.statusMessage = http.STATUS_CODES[404]
  res.setHeader('Content-Type', 'text/plain')
  res.end(http.STATUS_CODES[404] + '\n')
})

router.get('/time', function (req, res) {
  res.statusCode = 200
  res.statusMessage = http.STATUS_CODES[200]
  res.setHeader('Content-Type', 'text/plain')
  res.end(new Date().toISOString() + '\n')
})

router.get('/name', function (req, res) {
  res.statusCode = 200
  res.statusMessage = http.STATUS_CODES[200]
  res.setHeader('Content-Type', 'text/html')
  res.end(`<html><h1>My name is localhost:8080</h1></html>`)
})

var server = http.createServer(function (req, res) {
  // console.dir(req, { color: true, depth: 0 })
  //
  // req.url
  // req.headers
  // req.method

  router.dispatch(req, res)
})

// PORT > 1024
server.listen(8080)
