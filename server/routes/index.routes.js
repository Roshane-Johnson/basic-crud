const express = require('express')
const router = express.Router()
const { welcome, fun } = require('../controllers/index.controller')

router.route('/').get(welcome)

module.exports = router
