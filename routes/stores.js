const express = require('express')
const Router = express.Router();

// impoting stores from controller
const {getStores} = require('../controllers/stores')

// Routes
Router.route('/').get(getStores)

// Router.get('/', (req, res)=>{
//     res.send('Welcome to Node API store locator')
// })

module.exports = Router;