const express = require('express')
const Routes = express.Router()
const { list, add, view } = require('../Controllers/vendor.controlles')


// http://localhost:3050/
router.get('/vendor', list)
router.post('/vendor', add)
router.get('/vendor/:name', view)

module.exports = Routes