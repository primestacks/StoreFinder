const express = require('express');
const router = express.Router();
const {getStores, aboutInfo} = require('../controllers/stores');

// impoting stores from controller
// const {getStores} = require('../controllers/stores')

// Routes
router.route('/').get(getStores);
router.route('/about').get(aboutInfo);

router.get('/stores', (req, res)=>{
    res.send('All stores to pick from  @StoreFinder')
})

// Random Ids
// const storeIds = [1232, 34232, 45343, 54432, 532, 4231];

// function randomID(storeID){
//     const getRandom = Math.floor(Math.random() * storeID.length );
//     const randomID = storeID[getRandom];
//     return randomID;
// }

module.exports = router;