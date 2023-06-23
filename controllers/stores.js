// @Desc get all stores 
// @route Get api/v1/stores
// @access Public, since there are no authentications 

exports.getStores = (req, res, next)=>{
    res.send("<h1>Welcome to Store Finder</h1>")
}