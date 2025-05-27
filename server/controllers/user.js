const { User } = require('../models/user.js')
const bcrypt = require('bcrypt');
const { setUser } = require('../services/auth.js');
async function handleUserSignUp(req, res) {

    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) return res.status(400).send("User already exists");
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res.status(200).json({ message: "User Created Successfully!" });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error." });
    }

}

async function handleUserLogin(req, res) {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json( { message:"User Doesn't exists" } )
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = setUser(user);
        res.cookie('uid', token, {
            httpOnly: true,
            sameSite: 'None',  // or 'None' if using HTTPS
            secure: true     // true if you use HTTPS in production
        });
        console.log("cookiesent");
        return res.status(200).json({ message: "Login Successful" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

async function handleUserLogout(req, res) {
    try {

        res.clearCookie('uid', {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
        })
        return res.status(200).json( { message:"Successfully LoggedOut!" } );
    } catch (error) {
        return res.status(500).json( { message:"Failed to logout! X X",error } );
    }
}

async function handleUserStatus( req,res ) {
    return res.status(200).json({ authenticated:true }) ;

}
module.exports = {
    handleUserSignUp,
    handleUserLogin,
    handleUserLogout,
    handleUserStatus,
}