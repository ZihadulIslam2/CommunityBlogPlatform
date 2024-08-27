const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
// express app
// invoking the express
const app = express()

// mongodb connection
const dbURI =
  'mongodb+srv://zihadul708:01882343242@nodetuts.xnfrv.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts'

mongoose
  .connect(dbURI)
  .then((result) => app.listen(8080))
  .catch((err) => {
    console.log(err)
  })

// register view engine
app.set('view engine', 'ejs')

// listen for requests

// middleware static file
app.use(express.static('public'))

// next middleware using morgan
app.use(morgan('dev'))

// this are called handler
app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'How impress a girl',
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam!',
    },
    {
      title: 'How to make her happy',
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam!',
    },
    {
      title: 'How say her about your feelings.',
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam!',
    },
  ]

  res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about' })
})

// redirect
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'create blogs' })
})

//404 page
//use methods run every time.
app.use((req, res) => {
  res.status(404).render('404')
})
