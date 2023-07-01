const express = require('express');
const router = express.Router();
const {getStores, addStore} = require('../controllers/stores');

// impoting stores from controller
// const {getStores} = require('../controllers/stores')

// Routes (retreive all stores and to add a new store)
router.route('/')
.get(getStores)
.post(addStore)

// Random Ids
// const storeIds = [1232, 34232, 45343, 54432, 532, 4231];

// function randomID(storeID){
//     const getRandom = Math.floor(Math.random() * storeID.length );
//     const randomID = storeID[getRandom];
//     return randomID;
// }

module.exports = router;