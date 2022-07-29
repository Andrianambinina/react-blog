const express = require('express');
const router = express.Router();
const Category = require("../models/Category");

// CREATE CATEGORY
router.post("/", async (req, res) =>{
    const newCat = new Category(req.body);
    try {
        const category = await newCat.save();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET CATEGORY
router.get("/", async (req, res) => {
   try {
        const categories = await Category.find();
        res.status(200).json(categories);
   } catch (err) {
       res.status(500).json(err);
   }
});

module.exports = router;