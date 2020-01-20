const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @description Get all Items
// @access Public
router.get('/',  (req, res) => {    // we are already in /api/item route so we just need a forward slash
    Item.find()
    .sort({ date: -1}) // -1 for desending dates 1 for asending dates here
    .then(items => res.json(items))
}); 

module.exports = router;