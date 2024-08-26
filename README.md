# key concepts

-middleware
-runs on server before getting a req and sending a res.
-app.use(fun) is a middleware
-use next()
-third party middleware.

## middleware example:

- return 404
- Logger middleware to log details of every request
- Authentication check
- middleware to parse json data from request
- // middleware
  app.use((req, res, next) => {
  console.log('new req made.')
  console.log(req.hostname)
  console.log(req.method)
  console.log(req.path)
  next()
  })

## Third party middleware.

-morgan
-// middleware using morgan
app.use(morgan('dev'))

-middelware static file

- add css file static using morgan?
  -in the public folder everyting can be access by browser.

## practice task

- export a style sheet file.
- and practice everything.

## steps from scratch

-create a server using express
-listen to the server
-output dynamic value

- require ejs
- set as default view engine.
- require express.
- out put an array.
- output a css file.
  -use the morgan pacage

## problem

-
