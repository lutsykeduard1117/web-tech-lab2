const express = require('express');
const router = express.Router();
const itemModel = require('../models/itemModel');

// Головна сторінка
router.get('/', (req, res) => {
  const items = itemModel.getAllItems();
  res.render('index', { items });
});

module.exports = router;
