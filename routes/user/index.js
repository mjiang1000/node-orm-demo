const express = require('express')
const controller = require('./user.controller')
// const express
const router = express.Router()

router.get('/addUser', controller.addUser)
// router.get('/:id/userInfo', controller.userInfo)

module.exports = router