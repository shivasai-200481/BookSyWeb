const {getUser} = require('../services/auth.js');
function restrictToLoggedInUserOnly(req,res,next) {
    const userUid = req.cookies.uid;
    if(!userUid) return res.json({ message:"Please login." });
    const user = getUser(userUid);

    if(!user) return res.json({ message:"Login is required." });
    req.user = user;

    next();
}


module.exports = {
    restrictToLoggedInUserOnly,
}