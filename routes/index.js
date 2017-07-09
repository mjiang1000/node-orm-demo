const path = require('path')
module.exports = function (app) {
  app.all('*', (req, res, next) => {
  	// res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  	res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("X-Powered-By",' express')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
  })

  // app.use('/auth', require('./auth/index'))
  app.use('/user', require('./user/index'))

  app.use('/*', (req, res, next) => {
    return res.json({ status: 'success', data:'there is nothing'})
  })

}