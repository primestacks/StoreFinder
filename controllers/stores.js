// @Desc get all stores 
// @route Get api/v1/stores
// @access Public, since there are no authentications 

exports.getStores = (req, res, next)=>{
    res.send('Welcome to Node API store locator')
}