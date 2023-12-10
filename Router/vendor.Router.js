const express = require('express')
const Routes = express.Router()
const { list, add, view } = require('../Controllers/vendor.controlles')
Routes.get('/vendor')

// http://localhost:3050/
router.get('/vendor', list)
router.get('/vendor/:name', add)
router.post('/vendor', view)
module.exports = Routes