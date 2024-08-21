const express = require('express')

// express app
// invoking the express
const app = express()

app.get('/', (req, res) => {
  //res.send('<p>home page hello</p>')
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname })
})

// redirect
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})

//404 page
//use mehtod run every time.
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})

// listen for requests
app.listen(8080)
