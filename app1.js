const express = require('express')
const app = express()
// view engine ejs
const ejs = require('ejs')

app.listen(8080)
app.set('view engine', 'ejs')

//handler
app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'zihadul islam',
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam!',
    },
    {
      title: 'Parvez hassan',
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam!',
    },
    {
      title: 'Yousuf',
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam!',
    },
  ]
  res.render('index1', { title: 'Home', blogs })
})
app.use((req, res) => {
  res.status(404).render('4041', { title: '404 error' })
})
