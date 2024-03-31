const express = require('express');
const router = express.Router();

const { getRecipes } = require('../api/edamam');

// @desc    Landing page
// @route   GET /
router.get('/', async (req, res) => {
    res.render('index', { title: 'PlatterMate' });
});

module.exports = router;
