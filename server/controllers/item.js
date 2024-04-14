const Item = require("../models/cart.js");

const add = async (req, res) => {
    try {
        const {
            name,
            desc,
            price,
            quantity,
            shop
        } = req.body;
        const item = await Item.findOne({ name: name, shop: shop });
        if (item) {
            throw new Error("item already added");
        }
        const newItem = await Item.create({
            name: name,
            desc: desc,
            price: price,
            quantity: quantity,
            shop: shop
        })
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const remove = async (req, res) => {
    try {
        const {
            name,
            desc,
            price,
            quantity,
            shop
        } = req.body;
        const del = await Item.findOneAndDelete({ name: name, shop: shop });
        if (!del) {
            throw new Error("Item not found");
        } else {
            res.status(200).json(del);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const edit = async (req, res) => {
    try {
        const {
            name,
            desc,
            price,
            quantity,
            shop
        } = req.body;
        const item = await Item.findOneAndUpdate({ name: name, shop: shop }, req.body, { new: true });
        if (!item) {
            throw new Error("Item not found");
        } else {
            res.status(200).json(item);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAll = async (req, res) => {
    try {
        Item.find({}).then((data) => {
            res.send({ status: "200", data: data })
        });
    } catch (error) {
        res.json(404);
    }
}

const getOne = async (req, res) => {
    try {
        const {
            name,
            desc,
            price,
            quantity,
            shop
        } = req.body;
        Item.findOne({ name: name, shop: shop }).then((data) => {
            res.send({ status: "200", data: data })
        });
    } catch (error) {
        res.json(404);
    }
}

const removeAll = async (req, res) => {
    try {
        const del = await Item.deleteMany({});
        res.status(200).json(del);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    add,
    remove,
    edit,
    getAll,
    getOne,
    removeAll
}