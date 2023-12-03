const express = require('express')
const Routes = express.Router()
const {list,add,view} = require('.././Controllers/vendor.controlles')
Routes.get('/vendor')


module.exports = Routes