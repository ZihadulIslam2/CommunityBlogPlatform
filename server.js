const http = require('http')
const _ = require('lodash')
const fs = require('fs')

const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(0, 20)
  console.log(num)

  const great = _.once(() => {
    console.log('helo')
  })
  great()
  great()

  console.log('server created')
  console.log(req.url)
  console.log(req.method)

  res.setHeader('content-type', 'text/html')

  // routing
  let path = './views/'

  switch (req.url) {
    case '/':
      res.statusCode = 200
      path += 'index.html'
      break
    case '/about':
      res.statusCode = 200
      path += 'about.html'
      break
    case '/about-me':
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      break

    default:
      res.statusCode = 404
      path += '404.html'
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen('8080', 'localhost', () => {
  console.log('listening to port 8080')
})
