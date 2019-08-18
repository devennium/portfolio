//Declared required files

const data = require('./data.json')
const express = require('express')

//Get a new express app
const app = express()

//Declare view engine to help clean up 
//  readability of code
app.set('view engine', 'pug')

//Serve static files in public folder
app.use('/static', express.static('./public'))

//Static route for index
app.get('/', function(req, res){
    res.render('../views/index', data.portfolio)
})

//Static route for about
app.get('/about', function (req, res){
    res.render('../views/about', data.portfolio.about)
})

//Dynamic route for projects
app.get('/project:id', function(req, res){
    res.render('../views/project', data.portfolio.project[req.params.id-1])
})

//Start express server listen on port 3000
app.listen(3000, (req, res) =>
    console.log('Host is running on port 3000')
)