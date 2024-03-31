const express = require('express');
const router = express.Router();

const { getRecipes } = require('../api/edamam');

// @desc    Search
// @route   GET /search/:query
router.get('/', async (req, res) => {
	try {
		query = req.query.query;
		const recipes = await getRecipes(query);
		res.render('results', { recipes, title: `Search: ${query}` });
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
		res.status(500).send('Error fetching recipes.');
	}
});

module.exports = router;
