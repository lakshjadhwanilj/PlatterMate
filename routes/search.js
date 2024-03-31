const express = require('express');
const router = express.Router();

const { getRecipes } = require('../api/edamam');

// @desc    Search
// @route   GET /search/:query
router.get('/', async (req, res) => {
	try {
		const recipes = await getRecipes(req.query.query);
		console.log(recipes);
		res.render('results', { recipes, title: 'PlatterMate' });
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
		res.status(500).send('Error fetching recipes.');
	}
});

module.exports = router;
