const express = require('express');
const router = express.Router();

// Privacy Policy сторінка
router.get('/', (req, res) => {
    res.render('privacy');
});

module.exports = router;
