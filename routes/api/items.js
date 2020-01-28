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

// @route POST api/items
// @description Create an Item
// @access Public
router.post('/',  (req, res) => {    // we are already in /api/item route so we just need a forward slash
    const newItem = new Item({
        name: req.body.name // body parser allows this
    });

    newItem.save().then(item => res.json(item));
}); 

// @route DELETE api/items/:id
// @description Delete a Item
// @access Public
router.delete('/:id',  (req, res) => {    
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

module.exports = router;