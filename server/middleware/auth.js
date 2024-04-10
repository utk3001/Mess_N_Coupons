const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const verifyToken = async (req, res) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.json({ status: false });
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
            if (err) {
                return res.json({ status: false,err })
            } else {
                const user = await User.findById(data.id)
                if (user) return res.json({ status: true, user: user })
                else return res.json({ status: false })
            }
        })
    } catch {
        res.status(501).json({ error: err.message });
    }
}

module.exports = verifyToken;