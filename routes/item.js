const express = require('express');
const router = express.Router();
const itemModel = require('../models/itemModel');

// Сторінка детальної інформації
router.get('/:id', (req, res) => {
    const item = itemModel.getItemById(req.params.id);
    if (item) {
        res.render('item', { item });
    } else {
        res.status(404).send('Item not found');
    }
});

module.exports = router;
