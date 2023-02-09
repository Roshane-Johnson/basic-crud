const express = require('express')
const router = express.Router()
const { index, create, read, update, destroy } = require('../controllers/user.controller')

router.route('/').get(index).post(create)

router.route('/:id').get(read).patch(update).delete(destroy)

module.exports = router
