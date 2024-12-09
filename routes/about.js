const express = require('express');
const router = express.Router();

// About сторінка
router.get('/', (req, res) => {
    res.render('about', { githubLink: 'https://github.com/your-username' });
});

module.exports = router;
