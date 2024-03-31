const express = require('express');
const router = express.Router();

const { getRecipes } = require('../api/edamam');

// @desc    Landing page
// @route   GET /
router.get('/', async (req, res) => {
    try {
        const recipes = await getRecipes('chicken');
        console.log(recipes);
        res.render('index', { recipes, title: 'PlatterMate' });
    } catch (error) {
        console.error(`Error fetching data from Edamam api: ${error}`);
        res.status(500).send('Error fetching recipes.');
    }
});

module.exports = router;
