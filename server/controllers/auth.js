const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            orders,
            confirmpassword
        } = req.body;
        const ifExist = await User.findOne({ email: email })
        if (ifExist) {
            throw new Error("Email already in use")
        }
        if (password != confirmpassword) {
            throw new Error("Passwords do not match")
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordHash,
            orders: orders
        })
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        newUser.password = undefined;
        res.cookie("token", token, { withCredentials: true, httpOnly: false });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("Invalid Credentials");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        user.password = undefined;
        res.cookie("token", token, { withCredentials: true, httpOnly: false });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const edit = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            confirmpassword,
            orders
        } = req.body;
        const user = await User.findOneAndUpdate({ email: email }, req.body, { new: true });
        if (!user) {
            throw new Error("user not found");
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    register,
    login,
    edit
}