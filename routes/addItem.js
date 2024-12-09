const express = require('express');
const router = express.Router();
const itemModel = require('../models/itemModel');

// Форма для додавання нового об'єкта
router.get('/', (req, res) => {
    res.render('add-item');
});

// Обробка даних з форми
router.post('/', (req, res) => {
    const { name, description, details } = req.body;
    if (name && description && details) {
        itemModel.addItem(name, description, details);
        res.redirect('/');
    } else {
        res.status(400).send('All fields are required!');
    }
});

module.exports = router;
