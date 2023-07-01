// @Desc get all stores 
// @route Get api/v1/stores
// @access Public, since there are no authentications 

exports.getStores = (req, res, next)=>{
    res.send("This is comming from controllers module")
}

// about route
exports.aboutInfo = (req, res, next)=>{
    res.send("Blog page")
}