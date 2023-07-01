const Store = require('../models/Store');
// @Desc get all stores 
// @route Get api/v1/stores
// @access Public, since there are no authentications 

exports.getStores = async (req, res, next)=>{
    try {
        const store = await Store.find();

        return res.status(200).json({
            success: true,
            count: store.length,
            data: store
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Server error!'})
    }
    // res.send("This is comming from controllers module")
}

// @Desc: add new store
// @route POST api/v1/stores
// @access Public, since there are no authentications 
exports.addStore = async (req, res, next)=>{
    try {
        // create and add store to database
        const store = await Store.create(req.body);

        return res.status(200).json({
            success: true,
            data: store 
        })
    } catch (err) {
        console.error(err)
        if(err.code === 11000){
            return res.status(500).json({error: 'This store already exist'})
        }
        res.status(500).json({error: 'Server error!'})
    }
    // res.send("This is comming from controllers module")
}
