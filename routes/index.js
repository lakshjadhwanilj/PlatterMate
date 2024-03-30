const express = require('express');
const router = express.Router();

const getRecipes = require('../api/edamam');

// @desc    Landing page
// @route   GET /
router.get('/', async (req, res) => {
    try {
        const recipes = await getRecipes('chicken');
        res.render('index', { recipes, title: 'Home' });
    } catch (error) {
        console.error(`Error fetching data from Edamam api: ${error}`);
    }
});

module.exports = router;
