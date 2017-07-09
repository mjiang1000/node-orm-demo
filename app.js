const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const Sequelize = require('sequelize')


const routes = require('./routes/index')
const config = require('./config/index')
const app = express()
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
	host: config.db.host, dialect: 'mysql', port: config.db.port,
})

app.set('port', process.env.PORT || 8032)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const createModels =  require('./models/index')
createModels(sequelize)
  .then((models) => {
    global.Models = models
    routes(app)
})
  .catch((err) => {
  console.err(err)
})



app.listen(app.get('port'), () => {
  console.log('app running listen port' + app.get('port'))
})

