const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const personRouter = require('./routes/person-route')
const teamRouter = require('./routes/team-route')
const issueRouter = require('./routes/issue-route')

require('./mongo-connection')

const app = express()
app.use(cors())
app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/person', personRouter)
app.use('/team', teamRouter)
app.use('/issue', issueRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app