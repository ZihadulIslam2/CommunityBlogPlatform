const express = require('express')

// express app
// invoking the express
const app = express()

// register view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //res.send('<p>home page hello</p>')
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

// redirect
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})

app.get('/blogs/create', (req, res) => {
  res.render('create')
})

//404 page
//use mehtod run every time.
app.use((req, res) => {
  res.status(404).render('404')
})

// listen for requests
app.listen(8080)
